export interface MovieData {
  page: number
  results: Result[]
}

export interface Result {
  imageurl: string[]
  genre: string[]
  imdbid: string
  title: string
  imdbrating: number
  released: number
  synopsis: string
  type: string
}
