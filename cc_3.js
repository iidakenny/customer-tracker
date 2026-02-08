// Inital list of 3 customers with their name, email, and purchase history.

let customers = [
    {
        name: "Matti Pallopää", 
        email: "matti.pallopaa@icloud.com", 
        purchases: ["water", "bread", "coffee"]
    },
    {
        name: "Päivi Hollola", 
        email: "paivi.hollola@icloud.com", 
        purchases: ["beef", "cucumber", "paper towels"]
    },
    {
        name: "Eetu Kimurainen", 
        email: "eetu.kimurainen@icloud.com", 
        purchases: ["croissant", "cheese", "jam"]
    }
];

console.log(customers);

// Adding a new customer to the end of the array.

customers.push(
    {
        name: "Jack Mann", 
        email: "jack.mann@icloud.com", 
        purchases: ["ice cream", "sweet potatoes", "chicken"]
    }
);

console.log(customers);

// Removing the first cusmtoer in the array.

customers.shift();

console.log(customers);

// Changing the email from "icloud.com" -> "outlook.com" for Eetu Kimurainen [2][1]. 

customers[1].email = "eetu.kimurainen@outlook.com";

// Added a new purchase to Jack Mann's purchase history.

customers[2].purchases.push("cookies");

console.log(customers);

// Looping through the customers and printing out their name and email.

