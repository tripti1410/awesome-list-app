const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const fs = require("fs");
const html = fs.readFileSync("./server/resources/readme.html", "utf8");

const { document } = new JSDOM(html).window;

function convertToObject(node) {
  obj = {};
  for (var p in node) {
    obj[p] = node[p];
  }
  return obj;
}

function getList(topic) {
  const query = `${topic.hash} + ul > li`;

  const secondLevelContent = [...document.querySelectorAll(query)].map(
    (secondLevelItem) => {
      const nodeObject = convertToObject(secondLevelItem);
      if (nodeObject.children.length === 2) {
        //HasChild
        const parent = nodeObject.children[0];
        const ul = nodeObject.children[1];
        return {
          title: parent.text,
          link: parent.hash,
          children: [...ul.children].map((item) => {
            const anchor = convertToObject(item.children)[0];
            //console.log(anchor, "anchor=================");
            return {
              title: anchor.text,
            };
          }),
        };
      } else {
        const child = nodeObject.children[0];
        return {
          title: child.text,
          link: child.hash,
          children: [],
        };
      }
    }
  );

  return secondLevelContent;

  //console.log(secondLevelContent, "secondLevelContent____________");
}

function getTopics() {
  const topics = [...document.querySelectorAll("#contents + ul a")].map(
    (topic) => {
      return {
        title: topic.text,
        link: topic.hash,
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
