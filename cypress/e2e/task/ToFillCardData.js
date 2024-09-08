/*
* Autor: Alexandra Tr
* Fecha: 2024-09-08
* Descripción:  Task class to manage card
* Versión: 1.0
* */

import CardData from '../model/CardData'
import ProductPage from '../pages/productPage/ProductPage'

const cardData = new CardData();

const fillCardData = () => {
    ProductPage.fillNameCard(cardData.nameOnCard);
    ProductPage.fillNumberCard(cardData.cardNumber);
    ProductPage.fillCvcCardInput(cardData.cvc);
    ProductPage.fillExpiryMonthInput(cardData.expiryMonth);
    ProductPage.fillExpireYearInput(cardData.expiryYear); 

};


export { fillCardData };