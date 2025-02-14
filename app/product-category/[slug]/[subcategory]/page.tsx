import Filter from "@/components/filter-page/Filter";
import ProductsList from "@/components/filter-page/ProductsList";


export default async function ProductSubCategory({params}: { params: Promise<{ subcategory: string }> }) {
  const {subcategory} = await params;

  const title = subcategory.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="col-full">
      <div className="lh_loop_page lh_loop_page__with_aside" data-loop-page="entire">
        <Filter/>
        <div className="lh_loop_page__main">
          <div className="lh_loop_page__breadcrumb">
            <div className="lh_breadcrumb">
              <nav className="woocommerce-breadcrumb"><a href="https://www.israelcart.com" contentEditable="false"
              >Main Page</a><span
                className="separator">–</span><span>{title}</span></nav>
            </div>
          </div>

          <h1 className="lh_loop_page__title_wrap" data-loop-page-ajax-wrap="page_title"
              data-loop-page-ajax-init-skip="">
            <div className="lh_loop_page__title">{title}</div>
          </h1>


          <div className="lh_loop_page__before" data-loop-page-ajax-wrap="before">
            <div className="lh_categories__before_loop">
              <div className="before_loop__count"><span data-loop-result-count="">26</span> Results</div>
              <div className="before_loop__filters_button_wrap">
                <div className="filters_show_button" data-loop-mobile-filters-show=""><i
                  className="lh-icon-sliders-h-solid"></i></div>
              </div>
              <div className="lh_loop_page__sort_wrap" data-filters-order="wrap">
                <div className="order__label">Sort by:</div>
                <div className="dropdown-wrap">
                  <div className="over"></div>
                  <div className="dropdown-label">
                    <span data-filters-order="label">New products</span>
                    <div className="dropdown-icon"><i className="lh-icon-chevron-down-light"></i></div>
                  </div>
                  <div className="dropdown-target dropdown-target-slide">
                    <div className="dropdown-item
									" data-filters-order-value="popularity">Popularity
                    </div>
                    <div className="dropdown-item
				current					" data-filters-order-value="date">New products
                    </div>
                    <div className="dropdown-item
									" data-filters-order-value="price">Price: low to high
                    </div>
                    <div className="dropdown-item
									" data-filters-order-value="price-desc">Price: high to low
                    </div>
                    <div className="dropdown-item
									" data-filters-order-value="rating">Rating
                    </div>
                    <div className="dropdown-item
									" data-filters-order-value="discount">Discount
                    </div>
                  </div>
                </div>
              </div>

              <div className="lh_loop_filters__mobile_popup__wrap" data-loop-mobile-sort="">
                <div className="lh_loop_page__sort_wrap_mobile mobile_popup__frame">
                  <div className="mobile_popup__title">Sorting</div>
                  <div className="mobile_popup__overflow">
                    <div className="mobile_popup__button_close" data-loop-mobile-sort-show=""></div>
                    <div className="sort__item
									" data-filters-order-value="popularity" data-loop-mobile-sort-show="">Popularity
                    </div>
                    <div className="sort__item
				current					" data-filters-order-value="date" data-loop-mobile-sort-show="">New products
                    </div>
                    <div className="sort__item
									" data-filters-order-value="price" data-loop-mobile-sort-show="">Price: low to high
                    </div>
                    <div className="sort__item
									" data-filters-order-value="price-desc" data-loop-mobile-sort-show="">Price: high to low
                    </div>
                    <div className="sort__item
									" data-filters-order-value="rating" data-loop-mobile-sort-show="">Rating
                    </div>
                    <div className="sort__item
									" data-filters-order-value="discount" data-loop-mobile-sort-show="">Discount
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lh_loop_style_switch" data-loop-page-style-switch-wrap="">
            <div data-loop-page-style-switch="full_block" className=""></div>
            <div data-loop-page-style-switch="small" className="current"></div>
            <div data-loop-page-style-switch="list" className=""></div>
          </div>
          <div className="lh_loop_page__loop_before_mobile">
            <span data-loop-result-count="">26</span> Results
          </div>

          <div className="lh_loop_page__loop products-grid blocks small loaded" data-loop-page-ajax-wrap="loop"
               data-query-root="{&quot;show_for_waitlist&quot;:false,&quot;ids&quot;:[133750,134177,134175,134168,134162,134155,134148,134139,134132,134123,134115,134094,134086,134078,134068,134059,134049,133922,133579,132380,132474,133050,133034,133020,133013,133001,132988,132391,132466,132927,132885,132719,132718,132706,132696,132695,132694,132692,132690,132684,132683,132590,132589,132584,132583,132579,132573,132566,132564,132563,132562,132550,132351,132371,132370,132318,132307,132301,127405,127398,127391,128340,126044,126392,126383,126374,126354,126343,126331,126272,125516,125372,125371,125367,125321,125227,125234,125255,125195,123079,124820,124813,124807,124799,124792,124786,124780,124767,124748,123856,123854,123850,123848,124525,124531,124534,124537,124540,124557,124564,119201,119266,122946,122941,122931,121153,115858,115977,115828,119258,120146,119280,119229,119239,119245,119187,119215,119222,119178,119172,119160,119165,119233,119251,119368,119356,119348,119330,119321,119311,119297,119152,119145,119130,119114,119084,118618,118597,118586,118863,109942,109950,112437,112443]}"
               data-query="{&quot;cats&quot;:[3882]}" data-loop-page="1" data-loop-enable-select-category="1"
               data-loop-sort="date"
               data-loop-currency="{&quot;ce&quot;:1,&quot;cs&quot;:&quot;$&quot;,&quot;cn&quot;:&quot;USD&quot;}"
               data-query-uid="18364" data-query-list-name="New arrivals page" data-query-list-id="new_arrivals_page"
               data-current-url="https://www.israelcart.com/new-products?lh=cc!3882+o!date" data-offset="24">

<ProductsList slug={subcategory}/>

            <div className="lh_loop_page__paginate_wrap" data-loop-page="paginate">

              <div className="paginate_ctrl paginate_arrow paginate_prev disabled">
                <i className="lh-icon-chevron-left-regular"></i></div>
              <div className="paginate_ctrl paginate_number paginate_current">1</div>
              <a href="https://www.israelcart.com/new-products/page/2?lh=cc!3882+o!date" data-loop-page-link="2"
                 className="paginate_ctrl paginate_number" contentEditable="false">2</a>
              <a href="https://www.israelcart.com/new-products/page/2?lh=cc!3882+o!date"
                 className="paginate_ctrl paginate_arrow paginate_next" data-loop-page-link="2" contentEditable="false"
              ><i className="lh-icon-chevron-right-regular"></i></a>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
