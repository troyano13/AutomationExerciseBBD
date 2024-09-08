/*
* Autor: Alexandra Troyano
* Fecha: 2024-09-08
* Descripción:  Task class to fill form to new user 
* Versión: 1.0
* */

import NewUserFormData from '../model/NewUserFormData'
import loginPage from '../pages/loginPage/loginPage';
import LoginPage from '../pages/loginPage/loginPage'


const dataNewUser = new NewUserFormData();

const fillNewUserDataForm = () => {
    loginPage.CheckBox();
    LoginPage.fillPasswordInput(dataNewUser.password);
    LoginPage.fillDayInput(dataNewUser.day);
    LoginPage.fillMonthsInput(dataNewUser.month);
    LoginPage.fillYearsInput(dataNewUser.year);
    LoginPage.fillOptionInput();
    LoginPage.fillOption2Input();
    LoginPage.fillNameInput(dataNewUser.firstName);
    LoginPage.fillLastNameInput(dataNewUser.lastName);
    LoginPage.fillAddressInput(dataNewUser.address);
    LoginPage.fillCityInput(dataNewUser.city);
    LoginPage.fillStateInput(dataNewUser.state);
    LoginPage.fillZipCodeInput(dataNewUser.zipCode);
    LoginPage.fillMobileNumberInput(dataNewUser.mobileNumber);
    loginPage.fillCreateAccountBtn();

};



export { fillNewUserDataForm };