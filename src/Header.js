import "./Header.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <img
        className="header__logo"
        src=""
        alt="logo"
        src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/125292314/original/0fdc4ddb1c027ce8c2a24292fce53b9a2f2f0333/awesome-unique-fashion-and-feminine-logo-design.jpg"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">hello, user</span>
            <span className="header__optionLineTwo">sign</span>
          </div>
        </Link>
        {/* 2st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 3st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">You</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
      <Link to="chickOut" className="header__link">
        <div className="header__optionbasket">
          <ShoppingBasketIcon />
          {/* number of items in basket */}
          <span className="header__optionLineTwo header__basketCount">10</span>
        </div>
      </Link>
    </nav>
  );
}
export default Header;
