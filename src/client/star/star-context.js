import React, { useEffect } from "react";
import localforage from "localforage";

const StarContext = React.createContext();
function useStar() {
  const context = React.useContext(StarContext);
  if (!context) {
    throw new Error(`useStar must be used within a StarProvider`);
  }
  return context;
}

async function getLocalStorage() {
  try {
    const value = await localforage.getItem("star");
    return value;
  } catch (err) {
    console.log(err);
  }
}

async function setLocalStorage(star) {
  try {
    const value = await localforage.setItem("star", star);
    return value;
  } catch (err) {
    console.log(err);
  }
}

function wrapper(setStarLocally, star) {
  const result = {
    setStarStorage: function (updateStarFunc) {
      setStarLocally(updateStarFunc(star));
      setLocalStorage(updateStarFunc(star)).then((value) => value);
    },
  };

  return result;
}

function StarProvider(props) {
  const [star, setStarLocally] = React.useState({});
  let a = wrapper(setStarLocally, star);
  const value = React.useMemo(() => [star, a.setStarStorage], [star]);

  useEffect(() => {
    getLocalStorage().then((star) => {
      const value = star ? star : {};
      setStarLocally(value);
    });
  });

  return <StarContext.Provider value={value} {...props} />;
}
export { StarProvider, useStar };
