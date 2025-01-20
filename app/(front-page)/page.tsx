import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/common/featured-catgories/FeaturedCategories";
import FeaturedProducts from "@/components/common/featured-products/FeaturedProducts";
import ShowByCategories from "@/components/home/ShowByCategories";
import FeaturedRecipes from "@/components/common/featured-recipes/FeaturedRecipes";
import RecommendedProductsSlider from "@/components/common/recommended-products-slider/RecommendedProductsSlider";
import {IProductSimple} from "@/types/data";


async function getJustArrivedProducts() {
  const response = await fetch('https://rc.israelcart.com/wp-json/next/get-just-arrived-products');
  const products: IProductSimple[] = await response.json();
  return products;
}

export default async function Home() {
  const justArrivedProducts = await getJustArrivedProducts();

  return (
    <>
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
      <RecommendedProductsSlider title={'Just arrived'} buttonText={'On sale'} products={justArrivedProducts}/>
      <ShowByCategories/>
      <FeaturedRecipes/>
    </>
  );
}
