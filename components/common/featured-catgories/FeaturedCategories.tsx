import React, {FC} from 'react';
import Image from "next/image";

type Category = {
  slug: string;
  name: string;
  image: string;
}

export default async function FeaturedCategories() {
  const response = await fetch('https://rc.israelcart.com/wp-json/next/get-featured-categories', { cache: 'force-cache' });
  const categories: Category[] = await response.json();

  return (
    <div className="featured_categories_block">
      <div className="col-full">
        <div className="block_title">
          Featured categories
        </div>

        <div className="featured_categories">
          {categories?.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Category: FC<Category> = ({slug, name, image}) => {
  return (
    <div className="item">
      <a href={`https://rc.israelcart.com/product-category/${slug}/`} className="inner">
        <div className="image">
          <Image
            width={165}
            height={165}
            src={image}
            alt={name} className="image-loaded"
          />
        </div>
        <div className="category">
          {name}
        </div>
      </a>
    </div>
  );
}

