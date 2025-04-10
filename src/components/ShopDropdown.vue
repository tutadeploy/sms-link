<template>
  <div class="shop-dropdown ODc1MDA MjkwMA">
    <div class="dropdown-content">
      <ul role="menu" aria-hidden="true" class="shop-items">
        <h3>Shop</h3>
        <li>
          <a
            href="https://store.usps.com/store/browse/category.jsp?categoryId=buy-stamps"
            class="item-link"
          >
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/8cf6cd52TeKnX.svg"
              alt="Stamps"
            />Stamps
          </a>
        </li>
        <li>
          <a
            href="https://store.usps.com/store/browse/category.jsp?categoryId=shipping-supplies"
            class="item-link"
          >
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/c12815f2TeKnX.svg"
              alt="Shipping Supplies"
            />Shipping Supplies
          </a>
        </li>
        <li>
          <a
            href="https://store.usps.com/store/browse/category.jsp?categoryId=cards-envelopes"
            class="item-link"
          >
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/893b5448TeKnX.svg"
              alt="Cards & Envelopes"
            />Cards & Envelopes
          </a>
        </li>
        <li>
          <a href="https://store.usps.com/store/pse/" class="item-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/6cf75c4aTeKnX.svg"
              alt="Personalized Stamped Envelopes"
            />Personalized Stamped Envelopes
          </a>
        </li>
        <li>
          <a
            href="https://store.usps.com/store/browse/category.jsp?categoryId=stamp-collectors"
            class="item-link"
          >
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/b2728704TeKnX.svg"
              alt="Collectors"
            />Collectors
          </a>
        </li>
        <li>
          <a
            href="https://store.usps.com/store/browse/category.jsp?categoryId=stamp-gifts"
            class="item-link"
          >
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/986ebc6cTeKnX.svg"
              alt="Gifts"
            />Gifts
          </a>
        </li>
        <li>
          <a href="https://store.usps.com/store/results/business/_/N-1y2576k" class="item-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/da2e0f69TeKnX.svg"
              alt="Business Supplies"
            />Business Supplies
          </a>
        </li>
      </ul>
      <ul role="menu" aria-hidden="true" class="learn-about">
        <h3>Learn About</h3>
        <li><a href="https://www.usps.com/shop/money-orders.htm">Money Orders</a></li>
        <li>
          <a href="https://www.usps.com/shop/returns-exchanges.htm">Returns & Exchanges</a>
        </li>
        <li class="stamps-promo">
          <a href="https://www.usps.com/store/go-now.htm">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/49.png"
              alt="Need Stamps? Shop All Designs"
              class="promo-img"
          /></a>
        </li>
      </ul>
    </div>
    <form class="search postal-store-search" tabindex="-1" action="https://www.usps.com/search">
      <input type="text" placeholder="Search the Postal Store: Keyword or SKU" name="_dyncharset" />
      <button type="submit">
        <img
          src="https://www.usps.com/global-elements/header/images/utility-header/search.svg"
          alt="Search Postal Store"
        />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

/* Styles adapted from ReceiveDropdown */
.shop-dropdown {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  margin-left: -60px; // Adjust as needed for alignment
  z-index: 99999;
  padding: 20px 30px;
  max-height: 1800px;
  min-width: 650px; // Adjust width as needed
  white-space: normal;

  .dropdown-content {
    display: flex;
    gap: 60px; // Adjust space between columns
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    min-width: 240px; // Adjust column width

    h3 {
      cursor: default;
      font-family: @font-family-bold;
      font-weight: 700;
      font-size: 16px;
      color: #336;
      padding: 0 0 10px 0;
      margin: 0 0 10px 0;
      display: block;
      border-bottom: 1px solid #999;
    }

    li {
      display: block;
      margin-bottom: 5px;

      a {
        padding: 8px 5px;
        display: block;
        font-size: 14px;
        color: #336;
        font-family: @font-family-regular;
        font-weight: 500;
        text-align: left;
        text-decoration: none;
        position: relative;

        &:hover {
          background-color: #f6f6f6;
        }
      }
    }

    &.shop-items {
      li a {
        display: flex;
        align-items: center;
        font-family: @font-family-bold;
        font-weight: 500;
      }

      img {
        // Style for shop item icons
        height: 35px;
        width: 35px;
        margin-right: 10px;
        // Inherit other image styles from ReceiveDropdown if needed
        left: 0 !important;
        content: '';
        display: inline-block;
        background-size: 35px 35px;
        background-repeat: no-repeat;
        padding-right: 10px;
        transform: none;
        position: relative;
        vertical-align: middle;
        box-sizing: content-box;
      }
    }

    &.learn-about {
      min-width: 200px; // Adjust width for the Learn About column
      .stamps-promo {
        margin-top: 10px;
        padding: 5px;
        img {
          width: 195pxx;
          height: auto;
        }
      }
    }
  }

  .search {
    width: 100%;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;

    input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #dadada;
      border-radius: 4px;
      font-size: 14px;
      outline: none;
      width: 100%;
      background: #fff;

      &::placeholder {
        color: #202020;
        font-family: @font-family-regular;
      }
    }

    button {
      background: none;
      border: none;
      padding: 12px 16px;
      margin-left: -48px;
      cursor: pointer;
      display: flex;
      align-items: center;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
