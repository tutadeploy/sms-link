<template>
  <div class="repos ODc1MDA MjkwMA">
    <ul role="menu" aria-hidden="true" class="tools MjI5MDA">
      <h3>Tools</h3>
      <li>
        <a href="https://cns.usps.com/" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/23edd9acTeKnX.svg"
            alt="Click-N-Ship"
          />Click-N-Ship</a
        >
      </li>
      <li>
        <a href="https://store.usps.com/store/" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/9.svg"
            alt="Stamps & Supplies"
          />Stamps & Supplies</a
        >
      </li>
      <li>
        <a href="https://tools.usps.com/zip-code-lookup.htm" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/12.svg"
            alt="Look Up a ZIP Code"
          />Look Up a ZIP Code™</a
        >
      </li>
      <li>
        <a href="https://postcalc.usps.com/" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/10.svg"
            alt="Calculate a Price"
          />Calculate a Price</a
        >
      </li>
      <li>
        <a href="https://tools.usps.com/schedule-pickup-steps.htm" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/11.svg"
            alt="Schedule a Pickup"
          />Schedule a Pickup</a
        >
      </li>
      <li>
        <a href="https://tools.usps.com/find-location.htm" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/5.svg"
            alt="Find USPS Locations"
          />Find USPS Locations</a
        >
      </li>
      <li>
        <a href="https://tools.usps.com/go/TrackConfirmAction_input" class="tool-link"
          ><img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/19.svg"
            alt="Tracking"
          />Tracking</a
        >
      </li>
    </ul>
    <ul role="menu" aria-hidden="true">
      <h3>Learn About</h3>
      <li><a href="https://www.usps.com/ship/">Sending</a></li>
      <ul class="send-menu">
        <li><a href="https://www.usps.com/ship/letters.htm">Sending Mail</a></li>
        <li><a href="https://www.usps.com/ship/packages.htm">Sending Packages</a></li>
        <li>
          <a href="https://www.usps.com/ship/insurance-extra-services.htm"
            >Insurance & Extra Services</a
          >
        </li>
        <li>
          <a href="https://www.usps.com/ship/shipping-restrictions.htm">Shipping Restrictions</a>
        </li>
      </ul>
      <li>
        <a href="https://www.usps.com/ship/online-shipping.htm">Online Shipping</a>
      </li>
      <li><a href="https://www.usps.com/business/label-broker.htm">Label Broker</a></li>
      <li>
        <a href="https://www.usps.com/ship/custom-mail.htm">Custom Mail, Cards, & Envelopes</a>
      </li>
      <li><a href="https://www.usps.com/business/prices.htm">Postage Prices</a></li>
    </ul>
    <ul role="menu" aria-hidden="true">
      <h3 class="desktop-only">&nbsp;</h3>
      <li>
        <a href="https://www.usps.com/ship/mail-shipping-services.htm">Mail & Shipping Services</a>
      </li>
      <ul class="send-menu">
        <li>
          <a href="https://www.usps.com/ship/priority-mail-express.htm">Priority Mail Express</a>
        </li>
        <li><a href="https://www.usps.com/ship/priority-mail.htm">Priority Mail</a></li>
        <li>
          <a href="https://www.usps.com/ship/usps-ground-advantage.htm">USPS Ground Advantage</a>
        </li>
        <li>
          <a href="https://www.usps.com/ship/first-class-mail.htm">First-Class Mail</a>
        </li>
        <li>
          <a href="https://www.usps.com/ship/apo-fpo-dpo.htm">Military & Diplomatic Mail</a>
        </li>
      </ul>
      <li>
        <a href="https://www.usps.com/manage/package-intercept.htm">Redirecting a Package</a>
      </li>
      <li><a href="https://www.usps.com/shop/money-orders.htm">Money Orders</a></li>
      <li><a href="https://www.usps.com/help/claims.htm">Filing a Claim</a></li>
      <li><a href="https://www.usps.com/help/refunds.htm">Requesting a Refund</a></li>
      <li class="print-ship">
        <a href="https://www.usps.com/ship/go-now.htm">
          <img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/47.png"
            alt="Print & Ship from Home"
        /></a>
      </li>
    </ul>
    <form
      class="search global-header--search Njg2MDA NzMxMDA MTk2MDA"
      tabindex="-1"
      action="https://www.usps.com/search"
    >
      <input type="text" placeholder="Search or Enter a Tracking Number" />
      <button type="submit">
        <img
          src="https://www.usps.com/global-elements/header/images/utility-header/search.svg"
          alt="Search"
        />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

/* Repos Dropdown Styles - Moved from MainLayout */
.repos {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  margin-left: -20px;
  z-index: 99999;
  padding: 10px 20px;
  max-height: 1800px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;

    h3 {
      cursor: default;
      font-family:
        HelveticaNeueW02-75Bold,
        Helvetica Neue,
        Helvetica,
        Arial,
        sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #336;
      padding: 15px 10px 5px 5px;
      display: block;
      border-bottom: 1px solid #999;
      margin: 0;
    }
    h3.desktop-only {
      border-bottom: 0;
    }
    li {
      min-width: 220px;
      display: block;

      a {
        padding: 10px 5px;
        display: block;
        font-size: 14px;
        color: #336;
        font-family:
          HelveticaNeueW02-75Bold,
          Helvetica Neue,
          Helvetica,
          Arial,
          sans-serif;
        font-weight: 500;
        text-align: left;
        text-decoration: none;
        position: relative;

        &:hover {
          background-color: #f6f6f6;
        }
      }
    }

    li .tool-link {
      img {
        left: 0 !important;
        content: '';
        display: inline-block;
        height: 35px;
        width: 35px;
        background-size: 35px 35px;
        background-repeat: no-repeat;
        padding-right: 10px;
        transform: none;
        position: relative;
        vertical-align: middle;
        box-sizing: content-box;
      }
    }
  }

  ul + ul {
    padding-left: 30px;
  }

  .send-menu {
    list-style: none; /* Ensure nested ul doesn't have bullets */
    padding-left: 0; /* Reset padding */
    margin-left: 0; /* Reset margin */

    a {
      font-family:
        HelveticaNeueW02-55Roma,
        Helvetica Neue,
        Helvetica,
        Arial,
        sans-serif;
      font-weight: 320;
      text-indent: 20px;
    }
  }

  .print-ship {
    margin-top: 10px;
    padding: 5px;
    img {
      width: 220px;
      height: auto;
    }
  }

  .search {
    width: 100%;
    margin-top: 24px;
    padding-top: 24px;
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
        font-family:
          HelveticaNeueW02-55Roma,
          Helvetica Neue,
          Helvetica,
          Arial,
          sans-serif;
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
