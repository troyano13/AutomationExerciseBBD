/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  Data model to new user form
* Versión: 1.0
* */
class NewUserFormData {
  constructor() {
  
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.password = 'password123';
    this.day = '15';
    this.month = 'March';
    this.year = '1990';
    this.address = '123 Main St';
    this.city = 'New York';
    this.state = 'NY';
    this.zipCode = '10001';
    this.mobileNumber = '1234567890';
  }
}

module.exports = NewUserFormData;
