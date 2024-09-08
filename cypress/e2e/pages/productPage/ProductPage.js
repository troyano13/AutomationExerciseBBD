/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  Page Object general class to products 
* Versión: 1.0
* */
import Page from '../helperPage/Page.js'
import Assertions from '../../question/Assertions.js'

const page = new Page
const assertsThat = new Assertions

class ProductPage extends Page {
    constructor() {
        const elements = {
            productLbl: () => cy.contains('Products'),
            productsByImages: () => cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a'),
            viewCartBtn: () => cy.contains('View Cart'),
            addToCartBtn: () => cy.contains('Add to cart'),
            quantityProductImput: () => cy.get('#quantity'),
            proceedCheckoutBtn: () => cy.get('.col-sm-6 > .btn'),
            toOrder: () => cy.get(':nth-child(7) > .btn'),
            checkoutProductLbl: 'Order Placed!',
            //data card
            nameCard: '[data-qa="name-on-card"]',
            numberCard: '[data-qa="card-number"]',
            cvcCard: '[data-qa="cvc"]',
            expiryMonth: '[data-qa="expiry-month"]',
            expireYear: '[data-qa="expiry-year"]',
            payBtn: () => cy.get('[data-qa="pay-button"]')


        }
        super(elements);

    }

    clickProductLbl() {
        this.elements.productLbl().click()
        return this;
    }

    clickProductsByImages() {
        this.elements.productsByImages().click()
        return this;
    }

    clickAddToCartBtn() {
        this.elements.addToCartBtn().click()
        return this;
    }

    clickViewCartBtn() {
        this.elements.viewCartBtn().click()
        return this;
    }

    fillQuantityProductImput() {
        cy.randomQuantity().then((quantity) => {
            cy.log('Cantidad generada:', quantity);
            this.elements.quantityProductImput().clear().type(quantity);
        });
        return this;
    }

    clickProceedCheckoutBtn() {
        this.elements.proceedCheckoutBtn().click();
        cy.wait(5000);
        return this;
    }

    clickToOrder() {
        cy.wait(1000);
        this.elements.toOrder().click();
        return this;
    }

    //data card
    fillNameCard(lastName) {
        page.forceTypesendKeyByElement(this.elements.nameCard, lastName);
        return this;
    }

    fillNumberCard(lastName) {
        page.forceTypesendKeyByElement(this.elements.numberCard, lastName);
        return this;
    }

    fillCvcCardInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.cvcCard, lastName);
        return this;
    }

    fillExpiryMonthInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.expiryMonth, lastName);
        return this;
    }

    fillExpireYearInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.expireYear, lastName);
        return this;
    }
    clickPayBtn() {
        cy.scrollTo(0, 500);
        this.elements.payBtn().click();
        return this;
    }

    // validation
    validateCheckoutProductLbl() {
        assertsThat.expectElementIsPresentById(this.elements.checkoutProductLbl);
        return this;
    }


}
export default new ProductPage();