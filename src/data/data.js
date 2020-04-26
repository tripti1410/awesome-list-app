import awesomeListJSON from "./json";
const removeHashFromString = (string) => string.replace("#", "");
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

function insertSecondLevelChildren(
  topLevelContent,
  headingsWithRespectiveList
) {
  const a = topLevelContent.children.map((child) => {
    //console.log(child, child.id, "FUCCcccccccc");
    return {
      ...headingsWithRespectiveList[child.id],
    };
  });
  return a;
  //console.log(a[0].children, "AAAAAAAAAAAAAAA");
}

function getGithubLink(thirdLevelContent) {
  console.log(thirdLevelContent, "thirdLevelContent");
  return thirdLevelContent[0].props.href;
}

function formatThirdLevelContent(thirdLevelContent) {
  return thirdLevelContent.map((item) => {
    if (item.tag === "a") {
      return {
        githubLink: item.props && item.props.href,
        title: item.children && item.children[0].value,
      };
    } else {
      return item;
    }
  });
}

function getThirdlevelChildren(thirdLevelContent) {
  const c = formatThirdLevelContent(thirdLevelContent);
  console.log(c, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

  let children = [];
  if (thirdLevelContent.length <= 2) {
    children = []; //nochild case  JVM, IOS
  }

  return children;
}

function pairListWithRespectiveHeadings() {
  const a = awesomeListJSON
    .map((item, index) => {
      const nextItem = awesomeListJSON[index + 1];
      if (item.tag === "h2") {
        return {
          title: item.children[1].value, //platform
          id: item.props.id,
          link: item.children[0].props.href, //platform
          children: nextItem.children.map((child) => {
            return {
              title: child.children[0].children[0].value, //This is node js level
              link: child.children[0].props.href,
              id: removeHashFromString(child.children[0].props.href),
              githubLink: getGithubLink(child.children),
              children: getThirdlevelChildren(child.children),
            };
          }),
        };
      }
    })
    .filter((item) => item !== undefined);
  const headingsWithRespectiveList = convertArrayToObject(a, "id"); //all heading and inside there children
  // console.log(
  //   headingsWithRespectiveList["platforms"],
  //   "headingsWithRespectiveList"
  // );
  const topLevelContent = headingsWithRespectiveList.contents;
  //console.log(topLevelContent, "topLevelContent");
  insertSecondLevelChildren(topLevelContent, headingsWithRespectiveList);
  return headingsWithRespectiveList;
}

pairListWithRespectiveHeadings();

const data = {
  content: {
    title: "Content",
    children: [
      {
        title: "Platform",
        link: "/platform",
        description: "",
        children: [
          {
            title: "Node.js",
            link: "/node-js",
            githubLink: "https://github.com/sindresorhus/awesome-nodejs#readme",
            description:
              "Async non-blocking event-driven JavaScript runtime built on Chrome's V8 JavaScript engine.",
            children: [
              {
                title: "Cross-Platform",
                githubLink:
                  "https://github.com/bcoe/awesome-cross-platform-nodejs#readme",
                description: "Writing cross-platform code on Node.js.",
              },
            ],
          },
          {
            title: "Frontend Development",
            githubLink:
              "https://github.com/dypsilon/frontend-dev-bookmarks#readme",
            description: "",
          },
          {
            title: "IOS",
            githubLink: "https://github.com/vsouza/awesome-ios#readme",
            description:
              "Mobile operating system for Apple phones and tablets.",
          },
        ],
      },
      {
        title: "Programming Languages",
        link: "/programming-languages",
        description: "",
        children: [
          {
            title: "Javascript",
            description: "",
            link: "/javascript",
            children: [
              {
                title: "Promises",
                githubLink:
                  "https://github.com/wbinnssmith/awesome-promises#readme",
                description: "",
              },
              {
                title: "Standard Style",
                githubLink:
                  "https://github.com/standard/awesome-standard#readme",
                description: "Style guide and linter.",
              },
            ],
          },
        ],
      },
      {
        title: "Front-End Development",
        link: "/front-end-development",
        description: "",
        children: [],
      },
    ],
  },
};

export default data;
