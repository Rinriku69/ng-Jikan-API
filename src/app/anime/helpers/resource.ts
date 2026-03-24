import { httpResource } from "@angular/common/http";
import { Anime, AnimeListParams, JikanAnimeByIdResponse, JikanAnimeListResponse, } from "../types";
import { JikanAnimeCharactersResponse, JikanCharacterByIdResponse } from "../type/jikan/character";



const entryPointURL = 'https://api.jikan.moe/v4';

export function animeListResource(queryParams: () => AnimeListParams | undefined) {
  return httpResource<JikanAnimeListResponse>(() =>
    queryParams() ?
      {
        url: `${entryPointURL}/anime`,
        params: { ...queryParams()! },
      } : undefined

  );
}

export function currentSeasonAnimeResource(queryParams: () => AnimeListParams | undefined) {
  return httpResource<JikanAnimeListResponse>(() =>
    queryParams() ?
      {
        url: `${entryPointURL}/seasons/now`,
        params: { ...queryParams()! },
      } : undefined

  );
}

export function animeResource(id: () => number | undefined) {
  return httpResource<JikanAnimeByIdResponse>(() => (id() ? `${entryPointURL}/anime/${id()!}` : undefined))
}

export function topAnimeResource(queryParams: () => AnimeListParams | undefined) {
  return httpResource<JikanAnimeListResponse>(() =>
    queryParams() ?
      {
        url: `${entryPointURL}/top/anime`,
        params: { ...queryParams()! },
      } : undefined

  );
}

export function animeViewResource(id: () => string | undefined) {
  return httpResource<JikanAnimeByIdResponse>(() => (id() ? `${entryPointURL}/anime/${id()!}` : undefined));
}


export function getAnimeCharacter(id: () => string | undefined) {
  return httpResource<JikanAnimeCharactersResponse>(() => id() ? `${entryPointURL}/anime/${id()!}/characters` : undefined)
}

export function getCharacter(id: () => string | undefined) {
  return httpResource<JikanCharacterByIdResponse>(() => id() ? `${entryPointURL}/characters/${id()!}` : undefined)
}