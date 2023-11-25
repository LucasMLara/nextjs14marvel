import { Character } from "@/interfaces/interface";
import Image from "next/image";
import { sizes } from "@/utils/imageSizes";
import { fetchData } from "@/utils/fetchData";

export default async function Home() {
  const heroes = await fetchData({ query: "Spider" });

  return (
    <>
      {heroes.map(({ id, name, thumbnail: { path } }: Character) => (
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
