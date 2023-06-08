import {
  getDismissButton,
  getSearchBar,
  getDropDownSuggestionItem,
  getAsusCheckBox,
  getLowPriceInputField,
  getHighPriceInputField,
  getGoButton,
  getFilterIcon,
  getFilterList,
  getAsusFirstItem,
  getAddToCartButton,
  getCloseButton,
  getActiveCartBody,
  getPriceListFields,
  getDeleteButton,
  getSaveForLaterButton,
  getCompareSimilarItemsButton,
  getShareButton,
  getActiveItemValue,
  getCartSubtotal,
  getQuantityIcon,
} from "../PageObjects/automationtask";
import config from "../support/config";
const { searchValue, itemValue } = config.testDataValue;

describe("Safe automation task", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/");
  });
  it("checks for computers and laptops", () => {
    cy.wait(500);
    getDismissButton().click();
    getSearchBar().type(searchValue);
    getDropDownSuggestionItem()
      .contains(searchValue)
      .should("be.visible")
      .click({ force: true });
    getAsusCheckBox().contains(itemValue).click();

    //This price input field is removed from amazon website.But this is the code for it.

    // getPriceListFields().should("be.visible");
    // getLowPriceInputField().type("700");
    // getHighPriceInputField().type("800");
    //getGoButton().click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/s");
    });
    getFilterIcon().click();
    cy.wait(500);
    getFilterList().contains("Best Sellers").should("be.visible").click();
  });
  it("add items to the cart", () => {
    getSearchBar().type(
      "asus vivobook s14 s433 thin and light laptop, 14 fhd display {enter}"
    );
    getAsusFirstItem().click({ force: true });
    getAddToCartButton().should("be.enabled").click({ force: true });
    cy.wait(100);
    getCloseButton().click({ force: true });
    getActiveCartBody().click();
    getActiveItemValue().should("be.visible");
    getQuantityIcon().should("be.visible");
    getDeleteButton().contains("Delete").should("be.visible");
    getSaveForLaterButton()
      .eq(0)
      .contains("Save for later")
      .should("be.visible");
    getCompareSimilarItemsButton()
      .contains("Compare with similar items")
      .should("be.visible");
    getShareButton().contains("Share").should("be.visible");

    getCartSubtotal().should("be.visible");
  });
});
