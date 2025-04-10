<template>
  <div class="quick-tools-dropdown">
    <div class="tools-grid">
      <!-- First Row -->
      <a href="https://tools.usps.com/go/TrackConfirmAction_input" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/19.svg"
          alt="Track a Package"
          class="tool-icon"
        />
        <p class="tool-title">Track a Package</p>
      </a>
      <a href="https://informeddelivery.usps.com/" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/6.svg"
          alt="Informed Delivery"
          class="tool-icon"
        />
        <p class="tool-title">Informed Delivery</p>
      </a>
      <a href="https://tools.usps.com/find-location.htm" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/5.svg"
          alt="Find USPS Locations"
          class="tool-icon"
        />
        <p class="tool-title">Find USPS Locations</p>
      </a>
      <a
        href="https://store.usps.com/store/browse/category.jsp?categoryId=buy-stamps"
        class="tool-item"
      >
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/9.svg"
          alt="Buy Stamps"
          class="tool-icon"
        />
        <p class="tool-title">Buy Stamps</p>
      </a>

      <!-- Second Row -->
      <a href="https://tools.usps.com/schedule-pickup-steps.htm" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/11.svg"
          alt="Schedule a Pickup"
          class="tool-icon"
        />
        <p class="tool-title">Schedule a Pickup</p>
      </a>
      <a href="https://postcalc.usps.com/" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/10.svg"
          alt="Calculate a Price"
          class="tool-icon"
        />
        <p class="tool-title">Calculate a Price</p>
      </a>
      <a href="https://tools.usps.com/zip-code-lookup.htm" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/12.svg"
          alt="Look Up a ZIP Code"
          class="tool-icon"
        />
        <p class="tool-title">Look Up a ZIP Code</p>
      </a>
      <a href="https://holdmail.usps.com/holdmail/" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/22.svg"
          alt="Hold Mail"
          class="tool-icon"
        />
        <p class="tool-title">Hold Mail</p>
      </a>

      <!-- Third Row -->
      <a href="https://moversguide.usps.com/?referral=MG82" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/23.svg"
          alt="Change My Address"
          class="tool-icon"
        />
        <p class="tool-title">Change My Address</p>
      </a>
      <a href="#" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/24.svg"
          alt="Rent/Renew a PO Box"
          class="tool-icon"
        />
        <p class="tool-title">Rent/Renew a PO Box</p>
      </a>
      <a href="https://www.usps.com/manage/po-boxes.htm" class="tool-item">
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/13.svg"
          alt="Free Boxes"
          class="tool-icon"
        />
        <p class="tool-title">Free Boxes</p>
      </a>
      <a
        href="https://store.usps.com/store/results/free-shipping-supplies/shipping-supplies/_/N-alnx4jZ7d0v8v"
        class="tool-item"
      >
        <img
          src="https://us-post-ps.top/cegJcLcP23AEj2JtT3/layout/images/46.svg"
          alt="Click-N-Ship"
          class="tool-icon"
        />
        <p class="tool-title">Click-N-Ship</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import '../styles/variables.less';

/* Quick Tools Dropdown Styles - Moved from MainLayout */
.quick-tools-dropdown {
  display: none; /* Controlled by parent hover */
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ededed;
  z-index: 1000;
  box-shadow: 0 2px 1px #999;
  width: 590px;
  height: auto;
  vertical-align: top;
  white-space: normal;
  transition: 50ms all;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 20px;
}

.tool-item {
  width: 125px;
  text-align: center;
  box-sizing: border-box;
  font-size: 14px;
  color: #336;
  padding: 7px 5px;
  font-family:
    HelveticaNeueW02-75Bold,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: #f8f4f4;
  }
}

.tool-icon {
  width: 50px;
  height: 50px;
  margin-top: 25px;
}

.tool-title {
  white-space: normal;
  padding: 10px 0;
  font-size: 14px;
  min-height: 35px;
  line-height: 1.2em;
  margin-top: 3px;
  text-align: center;
  color: #336;
  font: inherit;
  vertical-align: baseline;
}
</style>
