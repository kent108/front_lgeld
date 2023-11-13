import { Format } from "./format";

export interface Price {
    id: number;
    article_id: number;
    format_id: number;
    price: number;
  format: Format;
  
}

export interface PriceToSend {
  article_id: number;
  format_id: number;
  price: number;
}