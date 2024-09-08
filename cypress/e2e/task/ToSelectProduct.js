/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  General class to manage on product
* Versión: 1.0
* */

import ProductPage from '../pages/productPage/ProductPage'



const addProductCart = () => {
    ProductPage.clickProductLbl();
    ProductPage.clickProductsByImages();
    ProductPage.fillQuantityProductImput();;

};

const completePurchase = () => {
    ProductPage.clickAddToCartBtn();
    ProductPage.clickViewCartBtn();
    ProductPage.clickProceedCheckoutBtn();
    cy.wait(5000);
    cy.scrollTo(0, 500);
    ProductPage.clickToOrder();
}




export { addProductCart, completePurchase };