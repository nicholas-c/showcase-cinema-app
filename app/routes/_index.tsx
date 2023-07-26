import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Header } from "~/componenrs/header/header.component";
import { Films } from "~/componenrs/films/films.component";
import { type FilmType } from "~/componenrs/films/films.definition";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Showcase Cinemas" }];
};

export async function loader() {
  const res = await fetch(
    "https://movieapi.showcasecinemas.co.uk/movies/45/7763?expandGenres=true&splitByAttributes=true"
  );

  const films: FilmType[] = await res.json();

  return json(films.filter((film) => !film.Archived));
}

export default function Index() {
  const films = useLoaderData<typeof loader>();

  return (
    <>
      <Header />

      <Films films={films} />
    </>
  );
}
