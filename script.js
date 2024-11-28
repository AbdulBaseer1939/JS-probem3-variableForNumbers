// problem#1: Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 30;
alert("age is: " + age);

// problem#2:  Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visits = 0;
visits++;
alert("You have visited this site " + visits + " time.");
document.body.innerHTML = `<p>you have visited this site ${visits} times.</p>`

// problem#3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser;
var birthYear = 1990;
document.write("My birth year is " + birthYear);

// problem#4: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var productTitle = "T-shirt";
var quantity = 5;
document.write(`John Doe ordered ${quantity} ${productTitle}s on XYZ Clothing store.`);

// problem#5: A visitor visits an online store www.myOnlineStore.com . Write a script to store in variables the following information: a. Product name b. Price c. Discount percentage i.e. how much discount the visitor will get Show the following message in your browser: “John Doe paid $120 for a T-shirt with a 15% discount”.
var productName = "T-shirt";
var price = 100;
var discountPercentage = 15;
var discountAmount = (price * discountPercentage) / 100;
var discountedPrice = price - discountAmount;
document.write(`John Doe paid $${discountedPrice} for a ${productName} with a ${discountPercentage}% discount.`);
