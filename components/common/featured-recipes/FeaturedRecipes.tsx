'use client'

import React, {useState} from 'react';
import {ButtonBack, ButtonNext, Carousel, Slide, Slider} from "react-scroll-snap-anime-slider";

const recipes = [
  1, 2, 3, 4, 5, 6, 7
];

export default function FeaturedRecipes() {
  const [visibleSlides, setVisibleSlides] = useState(4);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setVisibleSlides(1);
    } else if (window.innerWidth < 924) {
      setVisibleSlides(2);
    } else if (window.innerWidth < 1100) {
      setVisibleSlides(3);
    } else {
      setVisibleSlides(4);
    }
  }

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div
      data-js-ajax-block="https://rc.israelcart.com/wp-admin/admin-ajax.php?action=lh_get_ajax_block&amp;block=parts/shop-page/recipes&amp;current_post_id=0&amp;variables=[]"
      data-js-events="ready" data-js-loaded-event="homeRecipesLoaded" className="loading-started">
      <div className="recipes col-full">
        <div className="title_block"><a href="/recipes/">Recipes</a></div>

        <div data-items="recipes">
          <Carousel draggable={false} totalSlides={recipes.length} visibleSlides={visibleSlides}>
            <Slider>
              {recipes.map((product, index) => (
                <Slide
                  key={index}
                  style={{paddingBottom: 90}}
                >
                  <RecipeCard/>
                </Slide>
              ))}
            </Slider>
            <div className={'owl-nav'} style={{textAlign: "center"}}>
              <ButtonBack className={'owl-prev'}></ButtonBack>
              <ButtonNext className={'owl-next'}></ButtonNext>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}


const RecipeCard = () => {
  return (
    <div className="item">
      <div className="inner"
           style={{backgroundImage: 'url(https://rc.israelcart.com/wp-content/uploads/2023/08/davidpliner_banana_bread_with_pecans_white_tones_surface_home_k_679dfbd3-3257-49ee-ac3f-5c6574262712-1-660x440.png)'}}>
        <div className="content">
          <a href="https://rc.israelcart.com/recipes/tahini-banana-bread-with-pecans/"
             className="link_for_all_block"></a>
          <div className="item__hide_actions_wrap favorite_block">
            <div title="Add / remove recipe from favorite"></div>
          </div>
          <div className="categories"></div>
          <div className="title"> Tahini Banana Bread with Pecans</div>
          <div className="text">
            <div className="item_text"> We invite you to try a unique twist on a classic comfort food –
              Tahini
              Banana Bread with Pecans. This comforting bread combines the sweet warmth of ...
            </div>
            <div className="actions"><span className="read_more">Read more</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
