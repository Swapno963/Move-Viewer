import "server-only";

const dictionaries = {
  dt: () => import("./Data.json").then((module) => module.default),
};

export const getMovieDictionary = async () => {
  const data = await dictionaries["dt"]();
  //   console.log(data);
  return data;
};
export const getSingleMovieDictionary = async (Id) => {
  const data = await dictionaries["dt"]();
  //   console.log(data);
  const movie = data.find((mv) => mv.id == Id);
  // console.log(movie,id);
  return movie ?? "Not found";
};
