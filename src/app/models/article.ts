import { Type } from "./type";
import { Picture } from "./picture";
import { Format } from "./format";

export interface Article {
    price: string | Type;
    id: number;
    name: string;
    description: string;
    picture_id: number;
    type_id: number;
    formats: Format[];
    picture: Picture;
    type : Type
}