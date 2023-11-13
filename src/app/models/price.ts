import { Format, NewFormat } from "./format";

export interface Price {
    id: number;
    article_id: number;
    format_id: number;
    price: number;
    format: Format;
  
}

export interface NewPrice {
    price: number;
    format: NewFormat; 
}


export interface PriceToSend {
  article_id: number;
  format_id: number;
  price: number;
}