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
