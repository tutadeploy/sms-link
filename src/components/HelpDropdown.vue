<template>
  <div class="help-dropdown">
    <div class="dropdown-content">
      <ul role="menu" aria-hidden="true" class="help-menu">
        <li>
          <a
            href="https://faq.usps.com/s/"
            role="menuitem"
            tabindex="-1"
            rel="nofollow noreferrer noopener"
            >FAQs</a
          >
        </li>
        <li>
          <a
            href="https://www.usps.com/help/missing-mail.htm"
            role="menuitem"
            tabindex="-1"
            rel="nofollow noreferrer noopener"
            >Finding Missing Mail</a
          >
        </li>
        <li>
          <a
            href="https://www.usps.com/help/claims.htm"
            role="menuitem"
            tabindex="-1"
            rel="nofollow noreferrer noopener"
            >Filing a Claim</a
          >
        </li>
        <li>
          <a
            href="https://www.usps.com/help/refunds.htm"
            role="menuitem"
            tabindex="-1"
            rel="nofollow noreferrer noopener"
            >Requesting a Refund</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

.help-dropdown {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  left: -30px; // Position from right side since this is the rightmost dropdown
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  z-index: 99999;
  padding: 15px 20px;
  min-width: 230px;
  white-space: normal;

  .dropdown-content {
    display: flex;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      display: block;
      margin-bottom: 2px;

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
  }
}
</style>
