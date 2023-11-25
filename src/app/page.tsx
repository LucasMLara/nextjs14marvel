import { CharacterDataWrapper, Character } from "@/interfaces/interface";
import { Md5 } from "ts-md5";
import Image from "next/image";
import { sizes } from "@/utils/imageSizes";

export default async function Home() {
  const ts = new Date().toISOString();
  const hash = Md5.hashStr(
    ts + process.env.MARVEL_API_PRIVATE_KEY + process.env.MARVEL_API_PUBLIC_KEY
  );
  const url =
    process.env.MARVEL_URL +
    `v1/public/characters?ts=${ts}&apikey=${process.env.MARVEL_API_PUBLIC_KEY}&hash=${hash}&nameStartsWith=Iron`;

  const {
    data: { results },
  }: CharacterDataWrapper = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((characters) => characters.json());

  return (
    <>
      {results.map(({ id, name, thumbnail: { path }, ...rest }: Character) => (
        <div key={id}>
          <p>{name}</p>
          <Image
            width={150}
            height={150}
            alt="hero image"
            src={path + sizes.portrait.incredible}
          />
        </div>
      ))}
    </>
  );
}
