// https://developer.spotify.com/documentation/web-api/reference/object-model/#album-object-simplified

interface Entity {
  id: string;
  name: string;
}

export interface Album extends Entity {
  images: ImageObject[];
  artists?: Artist[];
}

export interface ImageObject {
  url: string;
  width?: number;
  height?: number;
}

export interface Artist extends Entity {}

export interface PagingObject<T> {
  items: T[];
  limit: number;
  total: number;
}

export interface AlbumsResponse {
  albums: PagingObject<Album>;
}

// http://www.jsontots.com/
