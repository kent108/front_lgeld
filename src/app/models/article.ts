import { Type } from "./type";
import { Picture } from "./picture";
import { Format } from "./format";
import { NewPrice, Price } from "./price";

export interface Article {
    id: number;
    name: string;
    description: string;
    picture_id: number;
    type_id: number;
    format : Format;
    picture: Picture;
    type : Type
    prices: Price[] ;
}

export interface NewArticle {
  name: string;
  description: string;
  picture_id?: number;
  type_id: number;
  picture?: Picture;
  prices: NewPrice[];
}

export interface ArticleToSend {
    name: string;
    description: string;
    picture_id: number;
    type_id: number;
}