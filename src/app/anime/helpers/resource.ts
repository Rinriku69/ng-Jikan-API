import { httpResource } from "@angular/common/http";
import { JikanAnimeListResponse } from "../types";

export async function fetchResource<T>(url: string, abortSignal?: AbortSignal | null): Promise<T>;
export async function fetchResource<T>(
  url: string | null,
  abortSignal?: AbortSignal | null,
): Promise<T | null>;
export async function fetchResource<T>(
  url: string | null,
  abortSignal: AbortSignal | null = null,
): Promise<T | null> {
  if (url === null) {
    return null;
  }
  const res = await fetch(url, { signal: abortSignal, cache: 'force-cache' });
  return await res.json();
}

const entryPointURL = 'https://api.jikan.moe/v4';

export function animeListResource(queryParams: () => { page?: number; limit?: number } = () => ({})) {
  return httpResource<JikanAnimeListResponse>(() => ({
    url: `${entryPointURL}/anime`,
    params: queryParams(),
  }));
}