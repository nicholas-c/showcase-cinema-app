// https://movieapi.showcasecinemas.co.uk/movies/45/7763?expandGenres=true&splitByAttributes=true

import { type FilmType } from "./films.definition";
import { Film } from "../film/film.component";

const Films = ({ films }: { films: FilmType[] }) => {
  return (
    <div className="grid  grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-4  bg-slate-800  text-white  p-4">
      {films.map((film) => (
        <Film key={film.FilmId} film={film} />
      ))}
    </div>
  );
};

export { Films };
