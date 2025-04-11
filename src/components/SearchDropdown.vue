<template>
  <div class="search-dropdown">
    <div class="dropdown-content">
      <div class="search-container">
        <form
          class="search"
          tabindex="-1"
          action="https://www.usps.com/search/results.htm?PNO=1&keyword="
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
      <div class="top-searches">
        <h3>Top Searches</h3>
        <ul role="menu" aria-hidden="true">
          <li>
            <a
              href="https://www.usps.com/search/results.htm?PNO=1&keyword=PO%20Boxes"
              role="menuitem"
              tabindex="-1"
              rel="nofollow noreferrer noopener"
              >PO BOXES</a
            >
          </li>
          <li>
            <a
              href="https://www.usps.com/search/results.htm?PNO=1&keyword=Passports"
              role="menuitem"
              tabindex="-1"
              rel="nofollow noreferrer noopener"
              >PASSPORTS</a
            >
          </li>
          <li>
            <a
              href="https://www.usps.com/search/results.htm?PNO=1&keyword=Free%20Boxes"
              role="menuitem"
              tabindex="-1"
              rel="nofollow noreferrer noopener"
              >FREE BOXES</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

.search-dropdown {
  display: none; /* Controlled by parent hover */
  background: #ededed;
  position: absolute;
  top: 100%;
  right: -10px;
  box-shadow: 0 2px 1px #999;
  transition-delay: 0s;
  opacity: 1;
  z-index: 99999;
  padding: 20px;
  min-width: 400px;
  white-space: normal;

  .dropdown-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .search-container {
    display: flex;
    align-items: center;
    width: 100%;
    background: #fff;
    border: none;
    padding: 0;
    border-bottom: 2px solid #336;

    .search {
      list-style: none;
      width: 100%;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    input {
      flex: 1;
      padding: 12px 0px;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      width: 100%;
      background-color: #ededed;
      border: none;

      &::placeholder {
        color: #202020;
        font-family:
          HelveticaNeueW02-55Roma,
          Helvetica Neue,
          Helvetica,
          Arial,
          sans-serif;
        font-size: 1.3rem;
        line-height: 2rem;
        margin: 0;
      }
    }

    button {
      background: none;
      border: none;
      padding: 8px;
      margin-left: -40px;
      cursor: pointer;
      display: flex;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .top-searches {
    h3 {
      text-align: left;
      padding: 0;
      margin: 0;
      text-indent: 20px;
      color: #336;
      font-size: 14px;
      font-family:
        HelveticaNeueW02-75Bold,
        Helvetica Neue,
        Helvetica,
        Arial,
        sans-serif;
      font-weight: 500;
    }

    ul {
      list-style: none;
      padding-left: 0;
      width: 100%;
      margin-left: 40px;
      display: inline-block;
      vertical-align: top;
      margin-top: 10px;
      li {
        padding-left: 0;
        text-indent: 15px;
        padding-bottom: 10px;
        a {
          text-decoration: none;
          display: block;
          &:hover {
            background-color: #f6f6f6;
          }

          font-size: 14px;
          color: #336;
          padding: 7px 5px;
          font-family:
            HelveticaNeueW02-75Bold,
            Helvetica Neue,
            Helvetica,
            Arial,
            sans-serif;
          font-weight: 500;
          text-align: left;
        }
      }
    }
  }
}
</style>
