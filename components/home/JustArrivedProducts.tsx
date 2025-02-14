"use client";

import useSWR from "swr";
import { FC } from "react";
import RecommendedProductsSlider from "@/components/common/recommended-products-slider/RecommendedProductsSlider";
import { IProductSimple } from "@/types/data";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const JustArrivedProducts: FC = () => {
  const { data: justArrivedProducts, error } = useSWR<IProductSimple[]>(
    "https://rc.israelcart.com/wp-json/next/get-just-arrived-products",
    fetcher
  );

  if (error) return <p>Failed to load products.</p>;
  if (!justArrivedProducts) return <div className='loader-wrp-sm'>
    <div className="loader"></div>
  </div>;

  return (
    <RecommendedProductsSlider
      title="Just arrived"
      buttonText="On sale"
      products={justArrivedProducts}
    />
  );
};

export default JustArrivedProducts;

