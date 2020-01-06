const Chance = require("chance");

let chance = new Chance();

function firstName() {
  return chance.first();
}
function middleName() {
  return chance.first();
}
function lastName() {
  return chance.last();
}
function phoneNumber() {
  return chance.phone();
}
function email() {
  return chance.email();
}
function address1() {
  return chance.address();
}
function address2() {
  return chance.street();
}
function city() {
  return chance.city();
}
function state() {
  return chance.state();
}
function postCode() {
  return chance.postcode();
}
function postalCode() {
  return chance.postal();
}
function randomNumber() {
  return `${chance.integer({ min: 10000, max: 99999 })}`;
}

function userName() {
  return `${firstName()}.${lastName().charAt[0]}`;
}

function password() {
  return chance.string({
    length: 10,
    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  });
}

function fakeCardNumber() {
  return chance.string({ length: 16, pool: "0123456789" });
}

module.exports = {
  firstName,
  middleName,
  lastName,
  randomNumber,
  phoneNumber,
  email,
  address1,
  address2,
  city,
  state,
  postCode,
  postalCode,
  userName,
  password,
  fakeCardNumber
};
