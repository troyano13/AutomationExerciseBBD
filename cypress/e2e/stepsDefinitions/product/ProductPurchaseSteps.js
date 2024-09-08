/*
* Autor: Alexandra Troyano
* Fecha: 2024-09-08
* Descripción:  Step definition clase to general login
* Versión: 1.0
* */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginAdmin, goToPage } from '../../task/ToFilllogin.js'
import { addProductCart, completePurchase } from '../../task/ToSelectProduct.js'
import ProductPage from '../../pages/productPage/ProductPage.js'
import {fillCardData} from '../../task/ToFillCardData.js'



Given('I am logged in the page', () => {
  goToPage();
  loginAdmin();

});


When('I select the product and I add the product to the cart', () => {
  addProductCart();
  
});


When('I proceed to checkout', () => {
  completePurchase();
  fillCardData();
  ProductPage.clickPayBtn() ; 

});

Then('I should see the order confirmation page', () => {
  ProductPage.validateCheckoutProductLbl();
           
});





