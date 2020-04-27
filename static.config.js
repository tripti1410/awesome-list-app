import path from "path";

const fs = require("fs");
let jsonData = JSON.parse(
  fs.readFileSync("./server/resources/readme.json", "utf-8")
);

function getOtherPages() {
  const a = jsonData.children.map((list) => {
    const b = list.children.map((item) => ({
      path: `${list.link}/${item.link}`,
      template: "src/containers/sublist",
      getData: () => ({
        item,
        breadcrumbs: [
          { title: list.title, link: list.link },
          { title: item.title, link: `${list.link}/${item.link}` },
        ],
      }),
    }));
    return b;
  });
  const result = a.flat();
  return result;
}

export default {
  getRoutes: async () => {
    return [
      {
        path: "/",
        getData: () => ({
          jsonData,
        }),
        children: jsonData.children.map((list) => ({
          path: `${list.link}`,
          template: "src/containers/listing",
          getData: () => ({
            list,
            breadcrumbs: [{ title: list.title, link: list.link }],
          }),
        })),
      },
      ...getOtherPages(),
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
};
