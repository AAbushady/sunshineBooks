(function () {
    "use strict";

    // Welcome the User
    console.log("Welcome to the customer counter!\n");

    // Variables and Constants
    let hour1 = 75;
    let hour2 = 96;
    let hour3 = 22;
    let hour4 = 108;
    let HOURS = [hour1, hour2, hour3, hour4];

    // Perform Calculations
    let totalCustomers = 0;

    for (let cnt = 0, hours = HOURS.length; cnt < hours; cnt++) {
        totalCustomers += HOURS[cnt];
    }
    let avgCustomers = totalCustomers / HOURS.length;

    // Display Results
    console.log(`The total number of customers is ${totalCustomers}`);
    console.log(`The average amount of customers is ${Math.ceil(avgCustomers)}`); // Rounded up because you can't have a quarter of a person.

    // Thank the User
    console.log("\nThanks for using the customer counter!");
})();
