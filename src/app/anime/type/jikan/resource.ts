

export interface JikanAnimeByIdResponse {
    readonly data: Anime;
}

export interface JikanAnimeListResponse {
    readonly pagination: Pagination;
    readonly data: readonly Anime[];
}

export interface Pagination {
    readonly last_visible_page: number;
    readonly has_next_page: boolean;
    readonly current_page: number;
    readonly items: PaginationItems;
}

export interface PaginationItems {
    readonly count: number;
    readonly total: number;
    readonly per_page: number;
}

export interface Anime {
    readonly mal_id: number;
    readonly url: string;
    readonly images: AnimeImages;
    readonly trailer: Trailer;
    readonly approved: boolean;
    readonly titles: readonly AnimeTitle[];
    readonly title: string;
    readonly title_english: string | null;
    readonly title_japanese: string | null;
    readonly title_synonyms: readonly string[];
    readonly type: string;
    readonly source: string;
    readonly episodes: number | null;
    readonly status: string;
    readonly airing: boolean;
    readonly aired: Aired;
    readonly duration: string;
    readonly rating: string | null;
    readonly score: number | null;
    readonly scored_by: number | null;
    readonly rank: number | null;
    readonly popularity: number | null;
    readonly members: number | null;
    readonly favorites: number | null;
    readonly synopsis: string | null;
    readonly background: string | null;
    readonly season: string | null;
    readonly year: number | null;
    readonly broadcast: Broadcast;
    readonly producers: readonly MalResource[];
    readonly licensors: readonly MalResource[];
    readonly studios: readonly MalResource[];
    readonly genres: readonly MalResource[];
    readonly explicit_genres: readonly MalResource[];
    readonly themes: readonly MalResource[];
    readonly demographics: readonly MalResource[];
}

export interface AnimeImages {
    readonly jpg: ImageFormat;
    readonly webp: ImageFormat;
}

export interface ImageFormat {
    readonly image_url: string;
    readonly small_image_url: string;
    readonly large_image_url: string;
}

export interface Trailer {
    readonly youtube_id: string | null;
    readonly url: string | null;
    readonly embed_url: string | null;
    readonly images: TrailerImages;
}

export interface TrailerImages {
    readonly image_url: string | null;
    readonly small_image_url: string | null;
    readonly medium_image_url: string | null;
    readonly large_image_url: string | null;
    readonly maximum_image_url: string | null;
}

export interface AnimeTitle {
    readonly type: string;
    readonly title: string;
}

export interface Aired {
    readonly from: string | null;
    readonly to: string | null;
    readonly prop: AiredProp;
    readonly string: string;
}

export interface AiredProp {
    readonly from: AiredDate;
    readonly to: AiredDate;
}

export interface AiredDate {
    readonly day: number | null;
    readonly month: number | null;
    readonly year: number | null;
}

export interface Broadcast {
    readonly day: string | null;
    readonly time: string | null;
    readonly timezone: string | null;
    readonly string: string | null;
}

export interface MalResource {
    readonly mal_id: number;
    readonly type: string;
    readonly name: string;
    readonly url: string;
}

export interface AnimeListParams {
    readonly q?: string;
    readonly page?: string;
    readonly limit?: string;
    readonly type?: 'tv' | 'movie' | 'ova' | 'special';
    readonly score?: number;
    readonly status?: 'airing' | 'complete';
    readonly sfw?: boolean;
    readonly genres?: string;
    readonly order_by?: string;
}