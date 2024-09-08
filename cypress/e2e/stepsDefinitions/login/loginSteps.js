/*
* Autor: Alexandra Troyano
* Fecha: 2024-09-08
* Descripción:  Step definition clase to product purchase
* Versión: 1.0
* */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginNewUser, goToPage, loginAdmin } from '../../task/ToFilllogin.js'
import { fillNewUserDataForm } from '../../task/ToFillNewUserForm.js'
import LoginPage from '../../pages/loginPage/loginPage.js'


Given('I open the login page', () => {
  goToPage();

});

When('I enter valid credentials', () => {
  loginAdmin();
});

Then('I should be see Logged in as', () => {
  LoginPage.validateLoggedInAsLbl();

});

//2 Scenario
When('I enter the new valid credentials', () => {
  loginNewUser();
  fillNewUserDataForm();

});

Then('I should be see ACCOUNT CREATED!', () => {
  LoginPage.validateAccountCreateLbl();

});

