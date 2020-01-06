//Register page
const firstName = "input[name=firstName]";
const lastName = "input[name=lastName]";
const phone = "input[name=phone]";
const email = "input[name=userName]"; //Email input field have userName assigned in HTML
const address1 = "input[name=address1]";
const address2 = "input[name=address2]";
const city = "input[name=city]";
const state = "input[name=state]";
const postalCode = "input[name=postalCode]";
const country = 'select[name="country"]';
const userName = "input[name=email]"; //User name input field have email assigned in HTML
const password = "input[name=password]";
const confirmPassword = "input[name=confirmPassword]";
const submitForm = "input[name=register]";

//Login page
const loginUserName = "input[name=userName]";
const loginButton = "input[name=login]";

//flight search page
const passengerCount = 'select[name="passCount"]';
const fromPort = 'select[name="fromPort"]';
const fromMonth = 'select[name="fromMonth"]';
const fromDay = 'select[name="fromDay"]';
const toPort = 'select[name="toPort"]';
const toMonth = 'select[name="toMonth"]';
const toDay = 'select[name="toDay"]';
const findFlightsButton = "input[name=findFlights]";
const airlinePref = 'select[name="airline"]';

const reserveFlightButton = '[name="reserveFlights"]';

//Secure reservation page
const mealPrefFirstName = "input[name=passFirst0]";
const mealPrefLastName = "input[name=passLast0]";

const creditCard = 'select[name="creditCard"]';
const creditnumber = "input[name=creditnumber]";
const creditCardExpMonth = 'select[name="cc_exp_dt_mn"]';
const creditCardExpYear = 'select[name="cc_exp_dt_yr"]';
const ccFirstName = "input[name=cc_frst_name]";
const ccMiddleName = "input[name=cc_mid_name]";
const ccLastName = "input[name=cc_last_name]";
const ccBillAddress1 = "input[name=billAddress1]";
const ccBillAddress2 = "input[name=billAddress2]";
const ccBillCity = "input[name=billCity]";
const ccBillState = "input[name=billState]";
const ccBillZip = "input[name=billZip]";
const ccBillCountry = 'select[name="billCountry"]';
const delBillAddress1 = "input[name=delAddress1]";
const delBillAddress2 = "input[name=delAddress2]";
const delBillCity = "input[name=delCity]";
const delBillState = "input[name=delState]";
const delBillZip = "input[name=delZip]";
const delBillCountry = 'select[name="delCountry"]';
const buyFlightsButton = "input[name=buyFlights]";
module.exports = {
  firstName,
  lastName,
  phone,
  email,
  address1,
  address2,
  city,
  state,
  postalCode,
  country,
  userName,
  password,
  confirmPassword,
  submitForm,
  loginUserName,
  loginButton,
  passengerCount,
  fromPort,
  fromMonth,
  fromDay,
  toPort,
  toMonth,
  toDay,
  findFlightsButton,
  airlinePref,
  reserveFlightButton,
  mealPrefFirstName,
  mealPrefLastName,
  creditCard,
  creditnumber,
  creditCardExpMonth,
  creditCardExpYear,
  ccFirstName,
  ccMiddleName,
  ccLastName,
  ccBillAddress1,
  ccBillAddress2,
  ccBillCity,
  ccBillState,
  ccBillZip,
  ccBillCountry,
  delBillAddress1,
  delBillAddress2,
  delBillCity,
  delBillState,
  delBillZip,
  delBillCountry,
  buyFlightsButton
};
