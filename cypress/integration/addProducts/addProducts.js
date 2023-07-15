import { Given, When } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../support/pages/homePage";
import searchResultsPage from "../../support/pages/searchResultsPage";
import productPage from "../../support/pages/productPage";
import cartPage from "../../support/pages/cartPage";

When("I set the delivery location to {string}", (location) => {
  homePage.setDeliveryLocation(location);
});

When("I search for {string}", (searchTerm) => {
  homePage.searchFor(searchTerm);
});

When("I sort the search results by {string}", (sortOption) => {
  searchResultsPage.sortBy(sortOption);
});

When(
  "I chose any product from the top 5 visible products and add {string} items to the basket",
  (quantity) => {
    searchResultsPage.selectProduct();
    productPage.increaseQuantity(quantity);
    productPage.addToBasket();
  }
);

When("I go to the basket", () => {
  cartPage.goToBasket();
});

When("I verify that the selected items were added to the basket", () => {
  cartPage.areItemsAdded();
});

When("I verify that the chosen quantity is displayed as {string}", (qty) => {
  cartPage.isQuantityIncreasedto(qty);
});
