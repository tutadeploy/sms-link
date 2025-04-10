<template>
  <div class="receive-dropdown ODc1MDA MjkwMA">
    <div class="dropdown-content">
      <ul role="menu" aria-hidden="true" class="tools">
        <h3>Tools</h3>
        <li>
          <a href="https://tools.usps.com/go/TrackConfirmAction_input" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/19.svg"
              alt="Tracking"
            />Tracking
          </a>
        </li>
        <li>
          <a href="https://informeddelivery.usps.com/" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/6.svg"
              alt="Informed Delivery"
            />Informed Delivery
          </a>
        </li>
        <li>
          <a href="https://retail-pi.usps.com/retailpi/actions/index.action" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/5acd8d5aTeKnX.svg"
              alt="Intercept a Package"
            />Intercept a Package
          </a>
        </li>
        <li>
          <a href="https://tools.usps.com/redelivery.htm" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/d4b14678TeKnX.svg"
              alt="Schedule a Redelivery"
            />Schedule a Redelivery
          </a>
        </li>
        <li>
          <a href="https://holdmail.usps.com/holdmail/" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/22.svg"
              alt="Hold Mail"
            />Hold Mail
          </a>
        </li>
        <li>
          <a href="https://moversguide.usps.com/?referral=MG80" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/23.svg"
              alt="Change of Address"
            />Change of Address
          </a>
        </li>
        <li>
          <a href="https://www.usps.com/manage/po-boxes.htm" class="tool-link">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/assets/b198e353TeKnX.svg"
              alt="Rent or Renew PO Box"
            />Rent or Renew PO Box
          </a>
        </li>
      </ul>
      <ul role="menu" aria-hidden="true" class="learn-about">
        <h3>Learn About</h3>
        <li><a href="https://www.usps.com/manage/">Managing Mail</a></li>
        <li><a href="https://informeddelivery.usps.com/">Informed Delivery</a></li>
        <li><a href="https://www.usps.com/manage/forward.htm">Forwarding Mail</a></li>
        <li>
          <a href="https://www.usps.com/manage/package-intercept.htm">Redirecting a Package</a>
        </li>
        <li><a href="https://www.usps.com/manage/po-boxes.htm">PO Boxes</a></li>
        <li><a href="https://www.usps.com/manage/mailboxes.htm">Mailbox Guidelines</a></li>
        <li>
          <a href="https://www.usps.com/manage/mail-for-deceased.htm">Mail for the Deceased</a>
        </li>
        <li class="informed-delivery-promo">
          <a href="https://www.usps.com/manage/go-now.htm">
            <img
              src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/48.png"
              alt="Informed Delivery Logo"
              class="id-logo"
          /></a>
        </li>
      </ul>
    </div>
    <form class="search global-header--search" tabindex="-1" action="https://www.usps.com/search">
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

<style lang="less">
@import '../styles/variables.less';

/* Basic structure similar to repos dropdown */
.receive-dropdown {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  left: 0;
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  margin-left: -40px; // Adjust as needed for alignment
  z-index: 99999;
  padding: 20px 30px;
  max-height: 1800px;
  min-width: 600px; // Ensure enough width
  white-space: normal;

  .dropdown-content {
    display: flex;
    gap: 40px; // Space between columns
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: top;
    box-sizing: border-box;
    min-width: 220px; // Minimum width for columns

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
        padding: 5px 5px;
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

    &.tools {
      li a {
        display: flex;
        align-items: center;
        font-family: @font-family-bold;
        font-weight: 500;
      }

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
        margin-right: 5px;
      }
    }

    &.learn-about {
      .informed-delivery-promo {
        margin-top: 10px;
        padding: 5px;
        img {
          width: 227px;
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
