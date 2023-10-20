export interface Price {
    id: number;
    article_id: number;
    format_id: number;
    price: number;
}

export interface PriceToSend {
  article_id: number;
  format_id: number;
  price: number;
}