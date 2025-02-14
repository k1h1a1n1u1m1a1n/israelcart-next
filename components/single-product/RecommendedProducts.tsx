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

interface RecommendedProductsProps {
  slug: string;
}

const RecommendedProducts: FC<RecommendedProductsProps> = ({ slug }) => {
  const { data: relatedProducts, error } = useSWR<IProductSimple[]>(
    `https://rc.israelcart.com/wp-json/next/get-related-products?slug=${slug}`,
    fetcher
  );

  if (error) return <p>Failed to load products.</p>;
  if (!relatedProducts) return <div className='loader-wrp-sm'><div className="loader"></div></div>;

  return <RecommendedProductsSlider title="You might also like" products={relatedProducts} />;
};

export default RecommendedProducts;

