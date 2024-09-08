/*
* Autor: Alexandra Tr.
* Fecha: 2024-09-08
* Descripción:  Data model to Card
* Versión: 1.0
* */
class DataCard {
  constructor() {

    this.nameOnCard = 'John Doe';
    this.cardNumber = '1234123412341234';
    this.cvc = '123';
    this.expiryMonth = '12';  
    this.expiryYear = '2025';
  }
}

module.exports = DataCard;
