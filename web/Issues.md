# **Registration page:**

### **Issue: #001**


**Summary/Description:**

Email and UserName input names in HTML are swapped.

**Steps to recreate:**

1. Go to registration page at http://newtours.demoaut.com/mercuryregister.php 
2. Inspect element for both Email and User Name text fields.

**Actual**:
Email element in HTML: `<input name="userName" id="userName" size="35" maxlength="64">`
UserName element in HTML : `<input name="email" id="email" size="20" maxlength="60">`

**Expected:**
User Name element in HTML: `<input name="userName" id="userName" size="35" maxlength="64">`
Email element in HTML : `<input name="email" id="email" size="20" maxlength="60">`

### **Issue:#002**

**Summary/Description:** 

Field validations are missing in Registration form

**Steps to recreate:**

1. Go to registration page at http://newtours.demoaut.com/mercuryregister.php 
2. Input numbers for FirstName, lastName, Email fields
3. Input alphabet characters for phone number
4. Submit form

**Actual:** 

Registration was successful

**Expected:** 

Errors where necessary for field validations.

**Notes:** 

submitting empty form is also sending form data to register. No client side validations for any of the fields (resulting an empty form can be sent to register)


# Flight search

### **Issue:#003**

**Summary/Description:**

Same Origin and destination accepted and results were shows.

**Steps to recreate:**

1. Login with valid credentials
2. Select Frankfurt from both "Departing from" and "Arriving in" dropdown.
3. Select continue

**Actual:** 

Flight results are shows for Frankfurt to Frankfurt.

**Expected:** 

When Frankfurt selected for "Departed from" dropdown, the same city should be disable or not available in "Arriving in" dropdown

**Notes:** 

The same applies for date range. User can use same dates for departing and arriving options. 


# **Book a flight (passenger details/payment capture page)**

### **Issue:#004**

**Summary/Description:** 

Billing and delivery address are pre-populated with mock data

**Steps to recreate:**

1. Login with valid credentials 
2. Select "departing from" and "arriving in" with any date range. 
3. Continue to selecting flights
4. Select any option from flight results (for both depart and arrival flights)
5. Continue to "Book a flight" page

**Actual:** 

In "Book a flight" page billing and delivery address are pre-populated with mock data.

**Expected:** 

Billing and delivery address should be populated with user's address captured during registration or should be empty.

### **Issue:#005**

**Summary/Description:** 

Basic field validations are missing in "Book a flight" form

**Steps to recreate:** 

1. Login with valid credentials 
2. Select "departing from" and "arriving in" with any date range. 
3. Continue to selecting flights
4. Select any option from flight results (for both depart and arrival flights)
5. Continue to "Book a flight" page
6. Enter alphanumeric data for FirstName, LastName and MiddleName 
7. Enter alphabets for Card number
8. Click "Secure Purchase" button

**Actual:** 

Alphanumeric values accepted for FirstName, MiddleName, LastName. Alphabetic values are accepted for Card Number.

**Expected:** 

Alphabets only for FirstName, MiddleName, LastName and numeric values for Card Number should be accepted. Otherwise should show error message to correct the input data.

