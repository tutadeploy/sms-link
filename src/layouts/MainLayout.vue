<script setup lang="ts">
import { RouterView } from 'vue-router'
import QuickToolsDropdown from '@/components/QuickToolsDropdown.vue'
import SendDropdown from '@/components/SendDropdown.vue'
import ReceiveDropdown from '@/components/ReceiveDropdown.vue'
import ShopDropdown from '@/components/ShopDropdown.vue'
import BusinessDropdown from '@/components/BusinessDropdown.vue'
</script>

<template>
  <div class="usps-layout">
    <!-- Mobile Header -->
    <header class="mobile-header">
      <img
        src="https://www.usps.com/assets/images/home/hamburger.svg"
        alt="Menu"
        class="mobile-hamburger"
      />
      <img
        src="https://www.usps.com/assets/images/home/logo_mobile.svg"
        alt="USPS"
        class="mobile-logo"
      />
      <img
        src="https://www.usps.com/global-elements/header/images/utility-header/search.svg"
        alt="Search"
        class="mobile-search"
      />
    </header>

    <!-- Utility Header -->
    <header class="utility-header">
      <div class="utility-container">
        <a href="#" class="utility-link">
          <img
            src="https://www.usps.com/assets/images/home/utility_languages.png"
            alt=""
            class="utility-icon"
          />
          English
        </a>
        <a href="#" class="utility-link">
          <img
            src="https://www.usps.com/global-elements/header/images/utility-header/location.svg"
            alt=""
            class="utility-icon"
          />
          Locations
        </a>
        <a href="#" class="utility-link">
          <img
            src="https://www.usps.com/assets/images/home/utility_customer_service.png"
            alt=""
            class="utility-icon"
          />
          Support
        </a>
        <a href="#" class="utility-link">
          <img
            src="https://www.usps.com/global-elements/header/images/utility-header/mailman.svg"
            alt=""
            class="utility-icon"
          />
          Informed Delivery
        </a>
        <a href="#" class="utility-link">Register / Sign In</a>
      </div>
    </header>

    <!-- Main Header -->
    <header class="main-header">
      <div class="header-container">
        <div class="logo-container">
          <img
            src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/43.svg"
            alt="USPS Logo"
            class="logo"
            style="width: 90%"
          />
        </div>
        <nav class="nav-container">
          <ul class="nav-list">
            <li class="qt-nav menuheader" style="width: 14%">
              <a class="nav-first-element header">Quick Tools</a>
              <QuickToolsDropdown />
            </li>
            <li class="menuheader" style="width: 11%">
              <a class="header">Send</a>
              <SendDropdown />
            </li>
            <li class="menuheader" style="width: 11%">
              <a class="header">Receive</a>
              <ReceiveDropdown />
            </li>
            <li class="menuheader" style="width: 13%">
              <a class="header">Shop</a>
              <ShopDropdown />
            </li>
            <li class="menuheader" style="width: 15%">
              <a class="header">Business</a>
              <BusinessDropdown />
            </li>
            <li href="https://www.usps.com/international/" class="menuheader" style="width: 16%">
              <a class="header">International</a>
            </li>
            <li href="https://faq.usps.com/s/" class="menuheader" style="width: 12%">
              <a class="header">Help</a>
            </li>
            <li href="#" class="nav-search menuheader" style="width: 4%">
              <a>
                <img
                  src="https://www.usps.com/global-elements/header/images/utility-header/search.svg"
                  alt="Search"
                  class="nav-tools-icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer -->
    <div id="global-footer--wrap" class="global-footer--wrap">
      <footer class="global-footer">
        <a
          href="https://www.usps.com/"
          class="global-footer--logo-link"
          rel="nofollow noreferrer noopener"
        >
          <img
            src="https://www.usps.com/global-elements/header/images/utility-header/logo-sb.svg"
            alt="USPS.COM"
            class="footer-logo"
          />
        </a>
        <nav class="global-footer--navigation">
          <!-- Helpful Links -->
          <ul style="display: inline">
            <li class="global-footer--navigation-category">
              <h3>HELPFUL LINKS</h3>
              <ul class="global-footer--navigation-options">
                <li>
                  <a
                    href="https://www.usps.com/help/contact-us.htm"
                    rel="nofollow noreferrer noopener"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.usps.com/globals/site-index.htm"
                    rel="nofollow noreferrer noopener"
                    >Site Index</a
                  >
                </li>
                <li>
                  <a href="https://faq.usps.com/s/" rel="nofollow noreferrer noopener">FAQs</a>
                </li>
                <li><a href="#" rel="nofollow noreferrer noopener">Feedback</a></li>
              </ul>
            </li>

            <!-- USPS Jobs -->
            <li style="margin-top: 15px" class="global-footer--navigation-category">
              <h3>USPS JOBS</h3>
              <ul class="global-footer--navigation-options">
                <li>
                  <a href="https://about.usps.com/careers/" rel="nofollow noreferrer noopener"
                    >Careers</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <!-- On About.USPS.com -->
          <ul style="display: inline">
            <li class="global-footer--navigation-category">
              <h3>ON ABOUT.USPS.COM</h3>
              <ul class="global-footer--navigation-options">
                <li>
                  <a href="https://about.usps.com/" rel="nofollow noreferrer noopener"
                    >About USPS Home</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/newsroom/" rel="nofollow noreferrer noopener"
                    >Newsroom</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/newsroom/service-alerts/"
                    rel="nofollow noreferrer noopener"
                    >USPS Service Updates</a
                  >
                </li>
                <li>
                  <a href="https://about.usps.com/resources/" rel="nofollow noreferrer noopener"
                    >Forms & Publications</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/what/government-services/"
                    rel="nofollow noreferrer noopener"
                    >Government Services</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <!-- Other USPS Sites -->
          <ul style="display: inline">
            <li class="global-footer--navigation-category">
              <h3>OTHER USPS SITES</h3>
              <ul class="global-footer--navigation-options">
                <li>
                  <a href="https://gateway.usps.com/" rel="nofollow noreferrer noopener"
                    >Business Customer Gateway</a
                  >
                </li>
                <li>
                  <a href="https://www.uspis.gov/" rel="nofollow noreferrer noopener"
                    >Postal Inspectors</a
                  >
                </li>
                <li>
                  <a href="https://www.uspsoig.gov/" rel="nofollow noreferrer noopener"
                    >Inspector General</a
                  >
                </li>
                <li>
                  <a href="https://pe.usps.com/" rel="nofollow noreferrer noopener"
                    >Postal Explorer</a
                  >
                </li>
                <li>
                  <a href="https://postalmuseum.si.edu/" rel="nofollow noreferrer noopener"
                    >National Postal Museum</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.usps.com/business/web-tools-apis/"
                    rel="nofollow noreferrer noopener"
                    >Resources for Developers</a
                  >
                </li>
                <li>
                  <a href="https://postalpro.usps.com/" rel="nofollow noreferrer noopener"
                    >PostalPro</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <!-- Legal Information -->
          <ul style="display: inline">
            <li class="global-footer--navigation-category">
              <h3>LEGAL INFORMATION</h3>
              <ul class="global-footer--navigation-options">
                <li>
                  <a
                    href="https://about.usps.com/who/legal/privacy-policy/"
                    rel="nofollow noreferrer noopener"
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/who/legal/terms-of-use.htm"
                    rel="nofollow noreferrer noopener"
                    >Terms of Use</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/who/legal/foia/"
                    rel="nofollow noreferrer noopener"
                    >FOIA</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/who/legal/no-fear-act/"
                    rel="nofollow noreferrer noopener"
                    >No FEAR Act/EEO Contacts</a
                  >
                </li>
                <li>
                  <a
                    href="https://about.usps.com/who/legal/accessibility-statement/"
                    rel="nofollow noreferrer noopener"
                    >Accessibility Statement</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="global-footer--copyright">
          <p>Copyright © 2025 USPS. All Rights Reserved.</p>
        </div>

        <ul class="global-footer--social">
          <li>
            <a
              href="https://www.facebook.com/USPS?rf=108501355848630"
              rel="nofollow noreferrer noopener"
            >
              <img
                src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/60.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/usps"
              style="text-decoration: none"
              rel="nofollow noreferrer noopener"
            >
              <img
                src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/61.png"
                alt="Twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/uspsstamps/" rel="nofollow noreferrer noopener">
              <img
                src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/62.png"
                alt="Pinterest"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/usps" rel="nofollow noreferrer noopener">
              <img
                src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/63.png"
                alt="YouTube"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style lang="less">
@import '../styles/variables.less';

.usps-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Mobile Header */
.mobile-header {
  display: none;
  width: 100%;
  height: 50px;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 3px solid @usps-red;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.mobile-hamburger,
.mobile-logo,
.mobile-search {
  height: 32px;
  width: auto;
  padding: 6px;
  cursor: pointer;
}

/* Utility Header */
.utility-header {
  position: relative;
  background-color: white;
  height: 32px;
  width: 100%;
}

.utility-container {
  max-width: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  height: 32px;
  position: absolute;
  right: 0;
  top: 0;
}

.utility-link {
  color: #575757;
  text-decoration: none;
  font-size: 10px;
  padding: 0 22px;
  font-family: @font-family-bold;
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  height: 100%;

  &:hover {
    color: @usps-blue;
  }
}

.utility-icon {
  width: 14px;
  height: 14px;
  opacity: 0.7;
}

/* Main Header */
.main-header {
  width: 100%;
  white-space: nowrap;
  margin-bottom: 80px;
  background: linear-gradient(to right, #fff 40%, #d8d8d8 41%);
  line-height: 1.05;
}

.logo-container {
  margin-left: 0;
}

@media only screen and (min-width: 1300px) {
  .logo-container {
    max-width: none;
    width: 18%;
  }
}

@media only screen and (min-width: 959px) {
  .logo-container {
    display: inline-block;
    white-space: nowrap;
    max-width: 300px;
    min-width: 130px;
    width: 20%;
    margin-left: 3%;
    box-sizing: border-box;
    height: 34px;
  }
}

.footer-logo {
  height: 27px;
  width: 221px;
}

@media only screen and (min-width: 959px) {
  .nav-container {
    display: inline-block;
    white-space: nowrap;
    vertical-align: bottom;
    position: relative;
    background: #d8d8d8;
    width: 80%;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 959px) {
  .nav-list {
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    box-sizing: border-box;
  }
}

.nav-list li.menuheader {
  display: inline-block;
  cursor: pointer;
  position: relative;

  &:hover .quick-tools-dropdown,
  &:hover .repos,
  &:hover .receive-dropdown,
  &:hover .shop-dropdown,
  &:hover .business-dropdown {
    display: block;
  }
}

.nav-search:hover {
  background: #ededed;
}

.nav-list li a.header:hover:before {
  background: #ededed;
  transform: skew(-12deg);
  -webkit-transform: skew(-12deg, 0deg);
  -moz-transform: skew(-12deg, 0deg);
  -ms-transform: skew(-12deg, 0deg);
  transform-origin: 0 35%;
  margin-left: -5px;
  height: 100%;
  width: 100%;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.nav-list li a.nav-first-element {
  color: #fff !important;
  padding-right: 20px;
  &:hover {
    color: #336 !important;
  }
}

.nav-list li a.nav-first-element:before {
  transform: skew(-12deg);
  -webkit-transform: skew(-12deg, 0deg);
  -moz-transform: skew(-12deg, 0deg);
  -ms-transform: skew(-12deg, 0deg);
  transform-origin: 0 35%;
  margin-left: -5px;
  background: #336;
  height: 100%;
  width: 100%;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.nav-list li a.nav-first-element:after {
  background: #e71921;
  height: 100%;
  width: 5px;
  content: '';
  position: absolute;
  top: 0;
  right: 3px;
  z-index: -1;
  transform: skew(-12deg);
  -moz-transform: skew(-12deg, 0deg);
  -ms-transform: skew(-12deg, 0deg);
}

.nav-list li.menuheader > a {
  padding: 14px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  display: block;
  font-size: 14px;
  text-decoration: none;
  z-index: 5;
  color: #336;
  font-family:
    HelveticaNeueW02-75Bold,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-weight: 600;
}

.nav-tools-icon {
  width: 24px;
  height: 13px;
  filter: none;
}

@media only screen and (max-width: @mobile-breakpoint) {
  .utility-header,
  .main-header {
    display: none !important;
    margin-bottom: 0px !important;
  }

  .mobile-header {
    display: flex;
  }
}

@media (min-width: 959px) {
  .header-container {
    padding: 0 30px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
}

#global-footer--wrap {
  background-color: #f7f7f7;
  border-top: 1px solid #dadada;
  padding: 40px 20px;
  width: 100%;
}

.global-footer {
  margin: 0 auto;
  max-width: 1024px;
  position: relative;

  &--logo-link {
    display: block;
    margin-bottom: 10px;
  }

  &--navigation {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 40px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &-category {
      h3 {
        color: #333366;
        font-size: 1.1rem;
        font-weight: bold;
      }
    }

    &-options {
      li {
        a {
          color: #080811;
          text-decoration: none;
          font-size: 1.1rem;
          margin-top: 2px;
        }
      }
    }
  }

  &--copyright {
    border-bottom: 1px solid #dadada;
    font-size: 1.1rem;
    padding: 0 0 30px;
  }

  &--social {
    margin: 20px 0 0;
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;

    li {
      a {
        display: block;

        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}

@media only screen and (max-width: @mobile-breakpoint) {
  .global-footer {
    &--navigation {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 0 0 20px 0;
      margin: 0;
    }

    &--navigation-category {
      h3 {
        display: inline-block;
        font-size: 1.1rem;
        font-family:
          HelveticaNeueW02-75Bold,
          Helvetica Neue,
          Helvetica,
          Arial,
          sans-serif;
        line-height: 20px;
        margin: 20px 0 0 0;
        text-transform: uppercase;
        vertical-align: top;
      }
    }

    &--navigation-options {
      li a {
        padding-left: 0;
        color: #202020;
        font-family:
          HelveticaNeueW02-65Medi,
          Helvetica Neue,
          Helvetica,
          Arial,
          sans-serif;
        line-height: 20px;
        font-weight: 400;
      }
    }

    &--social {
      justify-content: left;
      padding: 0;
    }
  }
}

/* Remove old dropdown styles from MainLayout */
.quick-tools-dropdown,
.repos,
.receive-dropdown,
.shop-dropdown,
.business-dropdown {
  /* Styles moved to respective components */
}
</style>
