import React from 'react';

type Category = {
  title: string;
  slug: string;
  image: string;
  link: string;
}

async function getCategoryData() {
  const response = await fetch('https://rc.israelcart.com/wp-json/next/get-top-categories');
  const categories: Category[] = await response.json();
  return categories;
}

export default async function ShowByCategories() {
  const categories = await getCategoryData();

  return (
    <div className="col-full products-grid main-categories">
      <div className="main-categories__inner">
        <div className="title_block">
          Shop by category
        </div>

        <div className="categories">
          {categories.map((category) => (
            <div key={category.slug} className="item">
              <a href="https://rc.israelcart.com/product-category/books/">
                <div className="title">
                  {category.title}
                </div>
                <div className="thumb" style={{backgroundImage: 'url(' + category.image + ')'}}></div>
              </a>
            </div>
          ))}
          <div className="item new-product">
            <a href="/new-products/">
              <div className="title">
                New products
              </div>
              <div className="thumb"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
