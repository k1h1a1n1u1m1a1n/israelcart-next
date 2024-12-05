export interface IProductCard {
  id: number;
  slug: string;
  title: string;
  price: number;
  image: string;
  markers: string[];
  producer: string;
  producer_url: string;
}

export interface IProduct {
  id: number;
  slug: string;
  sku: string;
  stock_status: string;
  title: string;
  price: number;
  image: string;
  gallery: string[];
  markers: string[];
  content: string;
  producer: string;
  producer_url: string;
  producer_image: string;
  producer_description: string;
}
