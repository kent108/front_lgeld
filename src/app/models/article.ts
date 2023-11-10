import { Type } from "./type";
import { Picture } from "./picture";
import { Format } from "./format";
import { Price } from "./price";

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

export interface ArticleToSend {
    name: string;
    description: string;
    picture_id: number;
    type_id: number;
}