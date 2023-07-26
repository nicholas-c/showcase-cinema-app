import { useState } from "react";
import { type FilmType } from "../films/films.definition";
import clsx from "clsx";

const extractTimes = (film: FilmType, sessionIndex: number) =>
  film.Sessions[sessionIndex].ExperienceTypes.flatMap(
    (experience) => experience.Times
  );

function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
}

const Film = ({ film }: { film: FilmType }) => {
  const [selectedSession, setSelectedSession] = useState(0);
  const times = extractTimes(film, selectedSession);

  return (
    <article key={film.FilmId}>
      <div
        className="relative  aspect-video  bg-cover  mb-4  "
        style={{
          backgroundImage: `url('${
            film.MediaItems.Still1 && film.MediaItems.Still1 !== ""
              ? film.MediaItems.Still1
              : film.Img
          }')`,
        }}
      >
        <div className="absolute  inset-0  top-auto  max-h-full">
          <div className="absolute  inset-0   bg-gradient-to-t  from-slate-950  z-0"></div>

          <div className="relative  z-10  p-3">
            <div className="pb-1">
              <span className="bg-white  rounded  text-slate-900  text-sm  py-1  px-2  font-bold  mr-3">
                {film.Cert}
              </span>

              {toHoursAndMinutes(parseInt(film.RunTime))}
            </div>

            <h1 className="uppercase  font-lato  font-bold  text-2xl  tracking-wide">
              {film.Title}
            </h1>

            <h2 className="text-sm">{film.Cast}</h2>
          </div>
        </div>
      </div>

      <div className="flex  overflow-x-auto  basis-auto  gap-4  mb-4">
        {film.Sessions.map((session, index) => {
          return (
            <button
              key={film.FilmId + session.Date}
              className={clsx(
                "border",
                "rounded",
                "py-1",
                "px-4",
                "text-sm",
                "flex  flex-col",
                "text-center",
                selectedSession === index &&
                  "border-white  bg-white  text-slate-900"
              )}
              onClick={() => {
                // setFilmTimes(extractTimes(film, index));
                setSelectedSession(index);
              }}
            >
              {new Intl.DateTimeFormat("en-GB", {
                weekday: "short",
              }).format(new Date(session.Date))}

              <span className="text-xl">
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                }).format(new Date(session.Date))}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex  flex-row  basis-auto  gap-4  overflow-x-auto">
        {times.map((time) => {
          return (
            <button
              className={clsx("bg-sky-800  py-2  px-4  w-32  shrink-0", {
                "opacity-50": time.SessionExpired,
              })}
              disabled={time.SessionExpired}
              key={film.FilmId + time.Scheduleid}
            >
              {time.StartTime}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export { Film };
