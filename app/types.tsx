export type Album = {
    id: string;
    name: string;
    by: string;
    numberOfLikes: number;
    imageUri: string;
    artistsHeadline: string;
}

export type Song = {
    id: string,
    imageUri: string,
    title: string,
    artist: string,
}