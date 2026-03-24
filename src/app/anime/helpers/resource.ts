import { httpResource } from "@angular/common/http";
import { AnimeListParams, JikanAnimeByIdResponse, JikanAnimeListResponse, } from "../types";



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
