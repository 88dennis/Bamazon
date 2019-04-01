var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password; YOU NEED TO ALTER THIS USING THE SOLUTION FROM STACK OVERFLOW.SEE PRINT SCREEN
  // set the password in the workbench
  password: "password",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    // searchItems()
    // connection.end();
  });
  
}
// function searchItems() {
//   inquirer
//     .prompt([
//       {
//       name: "productId",
//       type: "input",
//       message: "What is the ID number of the product you prefer to buy?",
//       validate: function(value){
//         if(isNaN(value) === false){
//           return true;
//         }
//         return false;
//       }  
    
//     },
//     {
//     name: "amount",
//     type: "input",
//     message: "Quantity",
//     validate: function(value){
//       if(isNaN(value) === false){
//         return true;
//       }
//       return false;
//     }

//     }
//   ])
//     .then(function(answer) {

//       connection.query("SELECT products.name FROM bamazon_DB.products WHERE ?", {productId: answer.productId}, function(err, res) {
        
//           console.log( "PRODUCT ID: " + answer.productId + " || Item: " + answer.amount);
        
//       });
//     });
// }
//       // switch (answer.action) {
//       // case "Find songs by artist":
//       //   artistSearch();
//       //   break;

//       // case "Find all artists who appear more than once":
//       //   multiSearch();
//       //   break;

//       // case "Find data within a specific range":
//       //   rangeSearch();
//       //   break;

//       // case "Search for a specific song":
//       //   songSearch();
//       //   break;

//       // case "Find artists with a top song and top album in the same year":
//       //   songAndAlbumSearch();
//       //   break;
//       // }



// // * The first should ask them the ID of the product they would like to buy.
// // * The second message should ask how many units of the product they would like to buy.

// // var nodeArgs = process.argv()

// // var startSelling = nodeArgs[2];

// // if()

// // function readProducts() {
// //   console.log("Selecting all products...\n");
// //   connection.query("SELECT * FROM products", function(err, res) {
// //     if (err) throw err;
// //     // Log all results of the SELECT statement
// //     console.log(res);
// //     connection.end();
// //   });
// // }
// // readProducts()
