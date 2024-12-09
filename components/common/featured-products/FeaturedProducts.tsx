import {IProductSimple} from "@/types/data";
import Tabs from "@/components/common/featured-products/Tabs";

async function getRecommendedProducts() {
  const response = await fetch('https://rc.israelcart.com/wp-json/next/get-featured-products');
  const products: IProductSimple[] = await response.json();
  return products;
}

const FeaturedProducts = async () => {
  const recommendedProducts = await getRecommendedProducts();

  return (
    <div className="featured_products">
      <div className="col-full">
        <div className="featured_products__inner">
          <div className="block_title">
            Featured products
          </div>
          <Tabs recommendedProducts={recommendedProducts}/>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
