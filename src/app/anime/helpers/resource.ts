import { httpResource } from "@angular/common/http";
import { JikanAnimeListResponse } from "../types";



const entryPointURL = 'https://api.jikan.moe/v4';

export function animeListResource(queryParams: () => { page?: number; limit?: number } = () => ({})) {
  return httpResource<JikanAnimeListResponse>(() => ({
    url: `${entryPointURL}/anime`,
    params: queryParams(),
  }));
}