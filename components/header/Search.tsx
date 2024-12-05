import React from 'react';

export default function Search() {
  return (
    <div className="lh_dropdown_search">
      <form data-dropdown_search="form" data-dropdown_search-status="default" method="get"
            action="https://rc.israelcart.com" data-js-search="">
        <div className="input_wrap">
          <label htmlFor="header_search_field"><i className="lh-icon-search-regular"></i></label>
          <input id="header_search_field" autoComplete="off" name="s" maxLength={100} type="text"
                 placeholder="Find your product" data-dropdown_search="input"/>
          <button type="submit" data-dropdown_search="search">Go</button>
          <span className="icon icon_search"></span>
          <span className="icon icon_error"><i
            className="lh-icon-exclamation-triangle-regular"></i></span>
          <span className="icon icon_loading"></span>
          <span className="icon icon_clear" data-dropdown_search="clear"><i
            className="lh-icon-times-regular"></i></span>
        </div>
        <div className="search_result_wrap">
          <div className="search_result empty" data-dropdown_search="result"></div>
        </div>
      </form>
    </div>
  );
}
