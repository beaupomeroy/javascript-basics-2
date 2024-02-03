///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(summedPrice);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const finalPrice = [cartTotal].reduce((acc, amount) => {
        const amountWithTax = amount * (1 + tax);
        const amountAfterCoupon = amountWithTax - couponValue;
        return amountAfterCoupon;
    },0);
    return finalPrice;
};
const cartTotal = 125;
const couponValue = 5;
const tax = 0.07;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log(finalPrice);
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Name: To store the customer's name. It will address customers personally so the restaurany knows their audience
Email: For communication purposes, in order to give the customer promotions and order confirmations.
Phone: Another communication method in order to give customer promotions and phone order confirmations. 
Membership: To give the customer added benefits from the frequency and total amounts they order. Provides the restaurant information on who their loyal customers are.

Data Types:
Name: String, because it provides textual data for the restaurant
Email: String, in order for the restaurant to store the customer's email address
Phone: Number, to store the customer's phone number
Membership: String, to store customer's membership type to differentiate each type of customer
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
name: 'Beau Pomeroy',
email: 'Joeschmo@gmail.com',
phone: 480-555-5666,
Membership: 'Gold' 
};