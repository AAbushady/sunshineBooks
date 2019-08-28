/*
    Sunshine Books is a bookstore that's open every morning from 8:00 am to
    12:00 pm. The manager wasts information about the number of customers
    in the store at different times. A clerk, whose station is near the door,
    counts customers by making a mark on a piece of paper each time a customer
    enters. The paper is divided into four segments, one for each hour, and the
    clerk notes the time before making each mark. When the store closes at noon,
    the clerk wants to enter the numbers into a program, which then displays
    the total number of cusomters for the day and the average number of customers
    per hour.
    
    Your job, as the programmer, is to develop a program to calculate the customers
    for the day, and the average number of customers per hour.
    
    Assume the clerk has counted the following customers...
    
    Hour:Customers
    1:75
    2:96
    3:22
    4:108
    
    Calculate and Display the total customers for the day and the average customers per hour...
*/

// Pseudocode
/*
    Welcome the User

    -Variables and Constants-
    Declare Numeric hour1
    Declare Numeric hour2
    Declare Numeric hour3
    Declare Numeric hour4
    Declare Numeric totalCustomers
    Declare Constant hours
    Declare Numeric avgCustomers
    
    -Calculate and Display Results-
    Add hour1, hour2, hour3, and hour4 to totalCustomers
    Display `The total number of customers is ${totalCustomers}`
    
    Divide totalCustomers by hours and assign to avgCustomers
    Display `The average amount of customers is ${avgCustomers}`
    
    Thank the user
*/

// Welcome the User
console.log("Welcome to the customer counter!");

// Variables and Constants
var hour1 = 75;
var hour2 = 96;
var hour3 = 22;
var hour4 = 108;
const HOURS = 4;

// Perform Calculations
var totalCustomers = hour1 + hour2 + hour3 + hour4;
var avgCustomers = totalCustomers / HOURS;

// Display Results
console.log(`The total number of customers is ${totalCustomers}`);
console.log(`The average amount of customers is ${Math.ceil(avgCustomers)}`); // Rounded up because you can't have a quarter of a person.

// Thank the User
console.log("Thanks for using the customer counter!");