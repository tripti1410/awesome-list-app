import path from "path";
//import axios from "axios";
import data from "./src/data/data";

const homePageData = data.content;

function getOtherPages(homePageData) {
  const a = homePageData.children.map((list) => {
    const b = list.children.map((item) => ({
      path: `${list.link}${item.link}`,
      template: "src/containers/sublist",
      getData: () => ({
        item,
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
          homePageData,
        }),
        children: homePageData.children.map((list) => ({
          path: `${list.link}`,
          template: "src/containers/listing",
          getData: () => ({
            list,
          }),
        })),
      },
      ...getOtherPages(homePageData),
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
