export interface FilmType {
  FilmId: number;
  Title: string;
  Cert: string;
  Img: string;
  ReleaseDate: string;
  RunTime: string;
  Synopsis: string;
  Teaser: string;
  Cast: string;
  Director: string;
  FriendlyName: string;
  Sessions: Session[];
  Genres: Genre[];
  MediaItems: MediaItems;
  IsComingSoon: boolean;
  Order: number;
  Archived: boolean;
}

export interface Session {
  Date: string;
  NewDate: string;
  DisplayDate: string;
  ActualDate: string;
  ActualDisplayDate: string;
  ExperienceTypes: ExperienceType[];
}

export interface ExperienceType {
  Id: string;
  Order: number;
  ExperienceAttributes: ExperienceAttribute[];
  Times: Time[];
}

export interface ExperienceAttribute {
  Id: string;
  Name: string;
  Description: string;
  Order: number;
}

export interface Time {
  StartTime: string;
  Scheduleid: string;
  SoldOut: boolean;
  NotBookable: boolean;
  SessionExpired: boolean;
  CinemaId: number;
  CinemaName: string;
  Screen: string;
  Experience: Experience[];
  LimitedAvailability: boolean;
}

export interface Experience {
  Id: string;
  Name: string;
  ExternalId: string;
  Description: string;
  Order: number;
}

export interface Genre {
  Id: number;
  GenreName: string;
}

export interface MediaItems {
  Quad: string;
  OneSheet: string;
  Still1: string;
  Still2: string;
}
