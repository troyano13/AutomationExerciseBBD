/*
* Autor: Alexandra Tr
* Fecha: 2024-09-08
* Descripción:  Task class to general manage login 
* Versión: 1.0
* */

import LoginPage from '../pages/loginPage/loginPage'


const email = Cypress.env('USER_EMAIL_ADMIN');
const password = Cypress.env('USER_PASSWORD');
const url = Cypress.env('url');


const loginAdmin = () => {
    LoginPage.fillLoginEmailTxt(email);
    LoginPage.fillLoginPasswordTxt(password);
    LoginPage.clickLoginButtonBtn();

};

const goToPage = () => {
    cy.visit(`${url}/login`);

};

const loginNewUser = () => {

    LoginPage.fillSignupNameTxt(email);
    LoginPage.fillSignupEmailTxt(password);
    LoginPage.clickSignupBtn();

};


export { loginAdmin, goToPage, loginNewUser, url };