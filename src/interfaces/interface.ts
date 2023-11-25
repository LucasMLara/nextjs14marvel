export interface Url {
  type: string;
  url: string;
}

export interface ISizes {
  portrait: {
    small: string;
    medium: string;
    xlarge: string;
    fantastic: string;
    uncanny: string;
    incredible: string;
  };
  standard: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    fantastic: string;
    amazing: string;
  };
  landscape: {
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    amazing: string;
    incredible: string;
  };
  fullsize: {
    detail: "/detail";
    fullsizeImg: "/full-size-image";
  };
}
export interface Image {
  path: string;
  extension: string;
  size: ISizes;
}
export interface ComicSummary {
  resourceURI: string;
  name: string;
}
export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}
export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}
export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}
export interface EventSummary {
  resourceURI: string;
  name: string;
}
export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}
export interface SeriesSummary {
  resourceURI: string;
  name: string;
}
export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}
export interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}
export interface CharacterDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}
