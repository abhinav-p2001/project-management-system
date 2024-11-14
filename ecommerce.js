// Base Product Constructor
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to adjust the quantity of the product
  Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount;
    console.log(`Updated quantity of ${this.name}: ${this.quantity}`);
  };
  
  // Method to display basic product details
  Product.prototype.displayDetails = function() {
    console.log(`Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  };
  
  // Electronics Constructor (Inheriting from Product)
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity);  // Inherit from Product
    this.brand = brand;
    this.model = model;
  }
  
  // Set the prototype of Electronics to be an instance of Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Method to power on the electronic product
  Electronics.prototype.powerOn = function() {
    console.log(`${this.name} powered on.`);
  };
  
  // Method to power off the electronic product
  Electronics.prototype.powerOff = function() {
    console.log(`${this.name} powered off.`);
  };
  
  // Override the displayDetails method for Electronics
  Electronics.prototype.displayDetails = function() {
    Product.prototype.displayDetails.call(this);
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
  };
  
  // Clothing Constructor (Inheriting from Product)
  function Clothing(name, price, quantity, size, color) {
    Product.call(this, name, price, quantity);  // Inherit from Product
    this.size = size;
    this.color = color;
  }
  
  // Set the prototype of Clothing to be an instance of Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Method to change the size of the clothing product
  Clothing.prototype.changeSize = function(newSize) {
    this.size = newSize;
    console.log(`${this.name} size changed to ${newSize}.`);
  };
  
  // Override the displayDetails method for Clothing
  Clothing.prototype.displayDetails = function() {
    Product.prototype.displayDetails.call(this);
    console.log(`Size: ${this.size}, Color: ${this.color}`);
  };
  
  // Books Constructor (Inheriting from Product)
  function Books(name, price, quantity, author, ISBN) {
    Product.call(this, name, price, quantity);  // Inherit from Product
    this.author = author;
    this.ISBN = ISBN;
  }
  
  // Set the prototype of Books to be an instance of Product
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Method to update the price of the book
  Books.prototype.updatePrice = function(newPrice) {
    this.price = newPrice;
    console.log(`${this.name} price updated to $${newPrice}.`);
  };
  
  // Override the displayDetails method for Books
  Books.prototype.displayDetails = function() {
    Product.prototype.displayDetails.call(this);
    console.log(`Author: ${this.author}, ISBN: ${this.ISBN}`);
  };
  
  // Demonstration of the functionality
  
  // Create instances of the products
  const laptop = new Electronics('Laptop', 1200, 10, 'Dell', 'XPS 13');
  const tshirt = new Clothing('T-shirt', 20, 50, 'L', 'Red');
  const book = new Books('JavaScript Guide', 40, 100, 'John Doe', '978-3-16-148410-0');
  
  // Display product details
  laptop.displayDetails();
  tshirt.displayDetails();
  book.displayDetails();
  
  // Rent a product (update quantity)
  laptop.updateQuantity(-2);  // 2 laptops rented out
  tshirt.updateQuantity(-5);  // 5 T-shirts rented out
  book.updateQuantity(-3);    // 3 books rented out
  
  // Perform additional operations
  laptop.powerOn();  // Power on the laptop
  laptop.powerOff();  // Power off the laptop
  
  tshirt.changeSize('M');  // Change size of T-shirt
  book.updatePrice(45);    // Update the price of the book