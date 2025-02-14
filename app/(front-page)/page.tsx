import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/common/featured-catgories/FeaturedCategories";
import FeaturedProducts from "@/components/common/featured-products/FeaturedProducts";
import ShowByCategories from "@/components/home/ShowByCategories";
import FeaturedRecipes from "@/components/common/featured-recipes/FeaturedRecipes";
import JustArrivedProducts from "@/components/home/JustArrivedProducts";



export default async function Home() {

  return (
    <>
      <Hero/>
      <FeaturedCategories/>
      <FeaturedProducts/>
      <JustArrivedProducts/>
      <ShowByCategories/>
      <FeaturedRecipes/>
    </>
  );
}
