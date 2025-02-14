'use client';
import { FC, useEffect, useState } from 'react';
import { IProductSimple } from '@/types/data';
import ProductCard from '@/components/ui/product-card/ProductCard';

const ProductsList: FC<{ slug: string }> = ({ slug }) => {
  const [products, setProducts] = useState<IProductSimple[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://rc.israelcart.com/wp-json/next/get-catalog?slug=${slug}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProducts(data);
      }finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  if (loading) return <div className={'loader-wrp'}><span className="loader"></span></div>;

  return (
    <>
      {products?.map((product) => (
        <div key={product.id} className="item">
          <ProductCard product={product} />
        </div>
      ))}
    </>
  );
};

export default ProductsList;
