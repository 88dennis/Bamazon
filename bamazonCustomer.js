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

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();

});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.table(res);

    searchItems()
  });
}

function searchItems() {
  inquirer
    .prompt([
      {
        name: "productId",
        type: "input",
        message: "What is the ID number of the product you prefer to buy?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "qty",
        type: "input",
        message: "Quantity",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {

      connection.query("SELECT * FROM products WHERE id=?", [answer.productId], function (err, res) {
        var currentItemQty = [];
        var numberOfItems = Number([answer.qty]);
        // console.log(numberOfItems);

        for (var i = 0; i < res.length; i++) {
          currentItemQty.push(res[i].quantity);
          console.log("Item ID #: " + res[i].id + " | " + "Purchased Item: " + res[i].name + " | " + "Qty: " + [answer.qty] + " | " + "Unit Price is: $" + res[i].price + " | " + "Total Price is: $" + (res[i].price * (numberOfItems)));
        }
        // console.log(currentItemQty[0]);

        var updatedInventory = currentItemQty[0] - numberOfItems;
        // console.log(updatedInventory);

        function updateInventory() {
          console.log("Updating quantities...\n");
          var query = connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                quantity: updatedInventory
              },
              {
                id: answer.productId
              },
            ],
          ); readProducts();
        } updateInventory()
      });
    });
}
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    console.table(res);
    connection.end();
  });
}