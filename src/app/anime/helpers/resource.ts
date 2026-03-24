import { httpResource } from "@angular/common/http";
import { AnimeListParams, JikanAnimeListResponse, JikanSeasonsNowResponse } from "../types";



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
  return httpResource<JikanSeasonsNowResponse>(() =>
    queryParams() ?
      {
        url: `${entryPointURL}/seasons/now`,
        params: { ...queryParams()! },
      } : undefined

  );
}