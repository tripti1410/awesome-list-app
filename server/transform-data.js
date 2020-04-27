const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");
const html = fs.readFileSync("./server/resources/readme.html", "utf8");

const { document } = new JSDOM(html).window;

function removeHash(string) {
  return string.replace("#", "");
}

function getDescription(nodeList) {
  const textNode = nodeList.find(
    (item) => item.nodeName === "#text" && item.wholeText.trim() !== ""
  );
  return textNode ? textNode.wholeText.trim() : "";
}

function getTitleLinkAndGithubLink(nodeList) {
  const anchorNode = nodeList.find((item) => item.nodeName === "A");
  return anchorNode
    ? {
        title: anchorNode.text,
        link: anchorNode.text.toLowerCase(),
        githubLink: anchorNode.href,
      }
    : { title: "", link: "", githubLink: "" };
}
function getTitleAndGithubLink(nodeList) {
  const endNode = nodeList[0];
  return {
    title: endNode.text,
    githubLink: endNode.href,
  };
}

function getItemDescription(nodeList) {
  const textNode = [...nodeList].find(
    (item) => item.nodeName === "#text" && item.wholeText.trim() !== ""
  );

  return textNode ? textNode.wholeText.trim() : "";
}

function getSubChildren(nodeList) {
  return [...nodeList]
    .map((subItem) => {
      if (subItem.nodeName === "LI") {
        const anchorAndTextNodeList = subItem.childNodes;
        const anchodeNodeList = [...anchorAndTextNodeList].filter(
          (item) => item.nodeName === "A"
        );
        return {
          ...getTitleAndGithubLink(anchodeNodeList),
          description: getItemDescription(anchorAndTextNodeList),
        };
      }
    })
    .filter((item) => item);
}

function getItem(nodeList) {
  const ulNode = nodeList.find((item) => item.nodeName === "UL");
  return ulNode ? getSubChildren(ulNode.childNodes) : [];
}

function getList(topic) {
  const query = `${topic.hash} + ul > li`;
  const listOfTopic = [...document.querySelectorAll(query)];
  const list = [...listOfTopic].map((list) => {
    const childrenOfList = [...list.childNodes];
    return {
      ...getTitleLinkAndGithubLink(childrenOfList),
      description: getDescription(childrenOfList),
      children: getItem(childrenOfList),
    };
  });
  return list;
}

function getTopics() {
  const topics = [...document.querySelectorAll("#contents + ul a")].map(
    (topic) => {
      return {
        title: topic.text,
        link: removeHash(topic.hash),
        children: getList(topic),
      };
    }
  );
  return topics;
}

var json = {
  title: "content",
  children: getTopics(),
};

fs.writeFileSync("./server/resources/readme.json", JSON.stringify(json));
