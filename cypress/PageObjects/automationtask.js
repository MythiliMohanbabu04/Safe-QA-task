export const getDismissButton = () => {
  return cy.get('[data-action-type="DISMISS"]');
};
export const getPriceListFields = () => {
  return cy.get(".a-list-item > form");
};
export const getSearchBar = () => {
  return cy.get("#twotabsearchtextbox");
};
export const getDropDownSuggestionItem = () => {
  return cy.get(":nth-child(1) > .s-suggestion-container > .s-suggestion");
};
export const getAsusCheckBox = () => {
  return cy.get('[data-csa-c-content-id="p_89/ASUS"]');
};
export const getLowPriceInputField = () => {
  return cy.get("#low-price");
};
export const getHighPriceInputField = () => {
  return cy.get("#high-price");
};
export const getGoButton = () => {
  return cy.get(".a-button-input");
};
export const getFilterIcon = () => {
  return cy.get("#a-autoid-0-announce");
};
export const getFilterList = () => {
  return cy.get("#s-result-sort-select_4");
};
export const getAsusFirstItem = () => {
  return cy.get(
    '[data-asin="B08KH4BND6"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium'
  );
};
export const getAddToCartButton = () => {
  return cy.get("#add-to-cart-button");
};
export const getCartButton = () => {
  return cy.get(
    '[class="a-button a-button-base attach-button-large attach-cart-button"]'
  );
};
export const getCloseButton = () => {
  return cy.get("#attach-close_sideSheet-link");
};
export const getActiveCartBody = () => {
  return cy.get("#nav-cart-count-container");
};
export const getActiveItemValue = () => {
  return cy.get(".a-truncate-cut");
};
export const getCartSubtotal = () => {
  return cy.get("#activeCartViewForm > .sc-subtotal");
};
export const getDeleteButton = () => {
  return cy.get('[data-feature-id="delete"]');
};
export const getSaveForLaterButton = () => {
  return cy.get('[data-feature-id="save-for-later"]');
};
export const getCompareSimilarItemsButton = () => {
  return cy.get("#comparison-lite-modal-B08KH4BND6");
};
export const getShareButton = () => {
  return cy.get('[data-action="ssf-share-icon"]');
};
export const getProceedToCheckoutButton = () => {
  return cy.get('[data-feature-id="proceed-to-checkout-action"]');
};
export const getQuantityIcon = () => {
  return cy.get('[data-a-class="quantity"]');
};
