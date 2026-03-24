// ==========================================
// 1. Get Character By ID (/characters/{id})
// ==========================================


export interface JikanCharacterByIdResponse {
    readonly data: CharacterFull;
}

export interface CharacterFull {
    readonly mal_id: number;
    readonly url: string;
    readonly images: CharacterImages;
    readonly name: string;
    readonly name_kanji: string | null;
    readonly nicknames: readonly string[];
    readonly favorites: number | null;
    readonly about: string | null;
}

// ==========================================
// 2. Get Anime Characters (/anime/{id}/characters)
// ==========================================

export interface JikanAnimeCharactersResponse {
    readonly data: readonly AnimeCharacter[];
}

export interface AnimeCharacter {
    readonly character: CharacterBasic;
    readonly role: string;
    readonly favorites: number;
    readonly voice_actors: readonly VoiceActor[];
}


export interface CharacterBasic {
    readonly mal_id: number;
    readonly url: string;
    readonly images: CharacterImages;
    readonly name: string;
}

export interface VoiceActor {
    readonly person: PersonBasic;
    readonly language: string;
}

export interface PersonBasic {
    readonly mal_id: number;
    readonly url: string;
    readonly images: PersonImages;
    readonly name: string;
}

// ==========================================
// Shared Image Interfaces (เฉพาะสำหรับ Character & Person)
// ==========================================

export interface CharacterImages {
    readonly jpg: CharacterImageFormat;
    readonly webp: CharacterImageFormat;
}


export interface CharacterImageFormat {
    readonly image_url: string;
    readonly small_image_url: string;
}

export interface PersonImages {
    readonly jpg: PersonImageFormat;
}

export interface PersonImageFormat {
    readonly image_url: string;
}