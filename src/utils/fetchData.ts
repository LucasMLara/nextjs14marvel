import { CharacterDataWrapper } from "@/interfaces/interface";
import { Md5 } from "ts-md5";

const ts = new Date().toISOString();

type dataType = {
  query: string;
};
export async function fetchData({ query }: dataType) {
  const hash = Md5.hashStr(
    ts + process.env.MARVEL_API_PRIVATE_KEY + process.env.MARVEL_API_PUBLIC_KEY
  );
  const url =
    process.env.MARVEL_URL +
    `v1/public/characters?ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}&nameStartsWith=${query}`;

  const {
    data: { results },
  }: CharacterDataWrapper = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((characters) => characters.json());

  return results;
}
