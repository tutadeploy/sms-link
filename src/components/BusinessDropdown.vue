<template>
  <div class="business-dropdown ODc1MDA MjkwMA">
    <div class="dropdown-content">
      <!-- Column 1: Tools -->
      <ul role="menu" aria-hidden="true" class="tools">
        <h3>Tools</h3>
        <li>
          <a href="https://postcalc.usps.com/Business" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/7d50888aTeKnX.svg"
              alt="Calculate a Business Price"
            />Calculate a Business Price
          </a>
        </li>
        <li>
          <a href="https://eddm.usps.com/eddm/" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/ed115770TeKnX.svg"
              alt="Every Door Direct Mail"
            />Every Door Direct Mail
          </a>
        </li>
        <li class="promo">
          <a href="https://www.usps.com/business/small-business.htm">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/50.png"
              alt="Small Business Solutions"
            />
          </a>
        </li>
      </ul>

      <!-- Column 2: Learn About (Shipping & Advertising) -->
      <ul role="menu" aria-hidden="true" class="learn-about shipping-advertising">
        <h3>Learn About</h3>
        <li><h4>Business Shipping</h4></li>
        <li>
          <a href="https://www.usps.com/business/loyalty-program.htm">USPS Loyalty Program</a>
        </li>
        <li>
          <a href="https://www.usps.com/business/shipping-consolidators.htm"
            >Shipping Consolidators</a
          >
        </li>

        <li class="sub-section"><h4>Advertising with Mail</h4></li>
        <li><a href="https://eddm.usps.com/eddm/">Using EDDM</a></li>
        <li>
          <a href="https://www.usps.com/business/advertise-with-mail.htm"
            >Mailing & Printing Services</a
          >
        </li>
        <li>
          <a href="https://www.usps.com/business/customized-direct-mail.htm"
            >Customized Direct Mail</a
          >
        </li>
        <li><a href="https://www.usps.com/business/political-mail.htm">Political Mail</a></li>
        <li>
          <a href="https://www.usps.com/business/promotions-incentives.htm"
            >Promotions & Incentives</a
          >
        </li>
        <li>
          <a href="https://www.usps.com/business/informed-delivery-marketing.htm"
            >Informed Delivery Marketing</a
          >
        </li>
        <li><a href="https://www.usps.com/business/product-samples.htm">Product Samples</a></li>
      </ul>

      <!-- Column 3: Learn About (Other Topics) -->
      <ul role="menu" aria-hidden="true" class="learn-about other-topics">
        <!-- Empty h3 for alignment, or could be styled differently -->
        <h3>&nbsp;</h3>
        <li><h4>USPS Connect</h4></li>
        <li><a href="https://www.uspsconnect.com/ecommerce/">eCommerce</a></li>
        <li><a href="https://www.uspsconnect.com/local/">Local</a></li>

        <li class="sub-section"><h4>Postage Options</h4></li>
        <li><a href="https://www.usps.com/business/verify-postage.htm">Verifying Postage</a></li>

        <li class="sub-section"><h4>Returns Services</h4></li>
        <li><a href="https://www.usps.com/business/return-services.htm">Returns Services</a></li>

        <li class="sub-section"><h4>Label Broker</h4></li>
        <li><a href="https://www.usps.com/business/label-broker.htm">Label Broker</a></li>

        <li class="sub-section"><h4>International Business Shipping</h4></li>
        <li>
          <a href="https://www.usps.com/international/business-shipping.htm"
            >International Business Shipping</a
          >
        </li>

        <li class="sub-section"><h4>Managing Business Mail</h4></li>
        <li><a href="https://www.usps.com/business/manage-mail.htm">Managing Business Mail</a></li>

        <li class="sub-section"><h4>Web Tools (APIs)</h4></li>
        <li><a href="https://www.usps.com/business/web-tools-apis/">Web Tools (APIs)</a></li>

        <li class="sub-section"><h4>Prices</h4></li>
        <li><a href="https://www.usps.com/business/prices.htm">Prices</a></li>
      </ul>
    </div>
    <form class="search business-search" tabindex="-1" action="https://www.usps.com/search">
      <input type="text" placeholder="Search or Enter a Tracking Number" />
      <button type="submit">
        <img
          src="https://www.usps.com/global-elements/header/images/utility-header/search.svg"
          alt="Search Business"
        />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

.business-dropdown {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  margin-left: -80px; // Adjust as needed
  z-index: 99999;
  padding: 20px 30px;
  max-height: 1800px;
  min-width: 800px; // Adjust width
  white-space: normal;

  .dropdown-content {
    display: flex;
    gap: 40px; // Adjust space
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    min-width: 180px; // Adjust column width

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

    // Style for subheadings like Business Shipping, Advertising with Mail
    h4 {
      font-family: @font-family-bold;
      font-weight: 700;
      font-size: 14px; // Slightly smaller than h3
      color: #336;
      margin: 15px 0 8px 0;
      padding-bottom: 5px;
      // Optional: Add a subtle underline or different style
    }

    // Remove top margin for the first h4 in a column if h3 exists
    h3 + li > h4 {
      margin-top: 0;
    }

    // Add space before subsection h4s
    .sub-section h4 {
      margin-top: 20px;
    }

    li {
      display: block;
      margin-bottom: 2px; // Tighter spacing for links

      a {
        padding: 6px 5px;
        display: block;
        font-size: 14px;
        color: #336;
        font-family: @font-family-regular;
        font-weight: 400;
        text-align: left;
        text-decoration: none;
        position: relative;

        &:hover {
          background-color: #f6f6f6;
        }
      }

      // Indent links under h4
      & > ul > li > a {
        padding-left: 15px;
      }
    }

    &.tools {
      min-width: 220px;
      li a {
        display: flex;
        align-items: center;
        font-family: @font-family-bold;
        font-weight: 500;
        padding: 8px 5px; // Slightly more padding for tool links
      }

      img {
        height: 35px;
        width: 35px;
        margin-right: 10px;
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

      .promo {
        margin-top: 20px;
        img {
          width: 100%;
          height: auto;
          max-width: 200px; // Limit promo image size
          // Reset icon styles if needed
          margin-right: 0;
          padding-right: 0;
        }
      }
    }

    &.learn-about {
      // General styles for learn about columns
      li a {
        font-weight: 400;
        font-family: @font-family-regular;
      }
    }

    &.shipping-advertising {
      min-width: 230px; // Adjust width
    }

    &.other-topics {
      min-width: 230px; // Adjust width
      h3 {
        // Hide the placeholder h3 visually but keep for structure
        border-bottom: none;
        color: transparent;
      }
      li:first-child h4 {
        // Remove margin from first h4 if h3 is hidden
        margin-top: 0;
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
