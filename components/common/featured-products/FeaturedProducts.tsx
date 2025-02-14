"use client";

import useSWR from "swr";
import { IProductSimple } from "@/types/data";
import Tabs from "@/components/common/featured-products/Tabs";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const FeaturedProducts = () => {
  const { data: recommendedProducts, error } = useSWR<IProductSimple[]>(
    "https://rc.israelcart.com/wp-json/next/get-featured-products",
    fetcher
  );

  return (
    <div className="featured_products">
      <div className="col-full">
        <div className="featured_products__inner">
          <div className="block_title">Featured products</div>
          {error && <p>Failed to load products.</p>}
          {!recommendedProducts ? <p>Loading...</p> : <Tabs recommendedProducts={recommendedProducts} />}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
