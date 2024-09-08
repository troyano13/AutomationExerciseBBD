/*
* Author: Alexandra Tr
* Date: 2024-09-08
* Description: Page Object general class to login
* Version: 1.0
* */
import Page from '../helperPage/Page.js'
import  Assertions  from '../../question/Assertions.js'
const page = new Page
const assertsThat = new Assertions


class login extends Page {


    constructor() {
        const elements = {
            // login new user 
            signupNameTxt: () => cy.get('[data-qa="signup-name"]'),
            signupEmailTxt: () => cy.get('[data-qa="signup-email"]'),
            signupBtn: () => cy.get('[data-qa="signup-button"]'),
            // login user 
            loginEmailTxt: '[data-qa="login-email"]',
            loginPasswordTxt: '[data-qa="login-password"]',
            loginButtonBtn: () => cy.get('[data-qa="login-button"]'),
            loggedInAsLbl: 'Logged in as',
            //data new user form
            checkBox: () => cy.get('#id_gender1'),
            passwordImput: '[data-qa="password"]',
            dayImput: '[data-qa="days"]',
            monthsImput: '[data-qa="months"]',
            yearsdImput: '[data-qa="years"]',
            optionImput: () => cy.get('#optin'),
            option2Imput: () => cy.get('#newsletter'),
            nameImput: '[data-qa="first_name"]',
            lastNameImput: '[data-qa="last_name"]',
            addressImput: '[data-qa="address"]',
            address2Imput: '[data-qa="address2"]',
            countryImput: '[data-qa="country"]',
            stateImput: '[data-qa="state"]',
            cityImput: '[data-qa="city"]',
            zipCodeImput: '[data-qa="zipcode"]',
            mobilNumberImput: '[data-qa="mobile_number"]',
            createAccountBtn: () => cy.get('[data-qa="create-account"]'),
            createAccountLbl: 'b',
            loginSucesstLbl: '#header ',
            accountCreateLbl: 'Congratulations!',

        }
        super(elements);
    }

    // login new user 
    fillSignupNameTxt() {
        cy.newUserNameFake().then((userName) => {
            cy.log('UserNAme:', userName);
            this.elements.signupNameTxt().clear().type(userName);
        });
        return this;
    }

    fillSignupEmailTxt() {
        cy.newEmailFake().then((email) => {
            cy.log('Email:', email);
            this.elements.signupEmailTxt().clear().type(email);
        });
        return this;
    }

    clickSignupBtn() {
        this.elements.signupBtn().click()
        return this;
    }
    // login user/admin 
    fillLoginEmailTxt(email) {
        page.forceTypesendKeyByElement(this.elements.loginEmailTxt, email);
        return this; 
        
    }

    fillLoginPasswordTxt(password) {
        cy.get(this.elements.loginPasswordTxt).type(password, { delay: 0, force: true });
        return this;

    }
    clickLoginButtonBtn() {
        this.elements.loginButtonBtn().click()
        return this;
    }

    // data new user 
    CheckBox() {
        this.elements.checkBox().click()
        return this;
    }

    fillPasswordInput(password) {
        page.forceTypesendKeyByElement(this.elements.passwordImput, password);
        return this;
    }

    fillDayInput(day) {
        cy.get(this.elements.dayImput).select(day);
        return this;
    }

    fillMonthsInput(month) {
        cy.get(this.elements.monthsImput).select(month);
        return this;
    }

    fillYearsInput(year) {
        cy.get(this.elements.yearsdImput).select(year);
        return this;
    }

    fillOptionInput() {
        this.elements.optionImput().click()
        return this;
    }

    fillOption2Input() {
        this.elements.option2Imput().click()
        return this;
    }
    fillNameInput(firstName) {
        page.forceTypesendKeyByElement(this.elements.nameImput, firstName);
        return this;
    }

    fillLastNameInput(lastName) {
        page.forceTypesendKeyByElement(this.elements.lastNameImput, lastName);
        return this;
    }


    fillAddressInput(address) {
        page.forceTypesendKeyByElement(this.elements.addressImput, address);
        return this;
    }

    fillAddress2Input(address2) {
        page.forceTypesendKeyByElement(this.elements.address2Imput, address2);
        return this;
    }

    fillCountryInput(country) {
        cy.get(this.elements.countryImput).select(country);
        return this;
    }

    fillStateInput(state) {
        page.forceTypesendKeyByElement(this.elements.stateImput, state);
        return this;
    }

    fillCityInput(city) {
        page.forceTypesendKeyByElement(this.elements.cityImput, city);
        return this;
    }

    fillZipCodeInput(zipCode) {
        page.forceTypesendKeyByElement(this.elements.zipCodeImput, zipCode);
        return this;
    }

    fillMobileNumberInput(mobileNumber) {
        page.forceTypesendKeyByElement(this.elements.mobilNumberImput, mobileNumber);
        return this;
    }

    fillCreateAccountBtn() {
        this.elements.createAccountBtn().click()
        return this;
    }
    // validation
    validateLoggedInAsLbl() {
        assertsThat.expectElementIsPresentById(this.elements.loggedInAsLbl);
        return this;
    }

    validateCreateAccountLbl() {
        assertsThat.expectElementIsPresentById(this.elements.createAccountLbl);
        return this;
    }

    validateAccountCreateLbl() {
        assertsThat.expectElementIsPresentById(this.elements.accountCreateLbl);
        return this;
    }


}
export default new login();
