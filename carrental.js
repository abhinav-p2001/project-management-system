function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
  }
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} rented the ${car.make} ${car.model}.`);
    } else {
      console.log(`${car.make} ${car.model} is already rented.`);
    }
  };
  function PremiumCustomer(name, rentedCars = [], discountRate = 10) {
    Customer.call(this, name, rentedCars); // Inherit properties from Customer
    this.discountRate = discountRate;
  }
  
  // Inherit prototype methods from Customer
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  function calculateRentalPrice(car, days, customer) {
    const basePrice = 50; // $50 per day
    const carTypeRates = {
      SUV: 1.2,  // 20% more expensive for SUV
      Sedan: 1.0, // Regular price for Sedan
      Coupe: 1.1, // 10% more expensive for Coupe
    };
  
    let carRate = carTypeRates[car.model] || 1.0; // Default to 1.0 if model not listed
    let price = basePrice * carRate * days;
  
    if (customer instanceof PremiumCustomer) {
      price -= price * (customer.discountRate / 100); // Apply discount for premium customers
    }
  
    return price;
  }
  Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
      car.isAvailable = true;
      const index = this.rentedCars.indexOf(car);
      if (index > -1) {
        this.rentedCars.splice(index, 1);
      }
      console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }, 2000); // Simulate a 2-second delay
  };
  function Maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`${car.make} ${car.model} is back from maintenance.`);
    }, delay);
  }
  // Create car objects
const car1 = new Car("Toyota", "SUV", 2020);
const car2 = new Car("Honda", "Sedan", 2022);
const car3 = new Car("BMW", "Coupe", 2021);

// Create regular customers
const regularCustomer = new Customer("Alice");
const premiumCustomer = new PremiumCustomer("Bob", [], 15); // 15% discount

// Show renting cars
regularCustomer.rentCar(car1);
premiumCustomer.rentCar(car2);

// Show rental price calculation
const regularPrice = calculateRentalPrice(car1, 3, regularCustomer); // 3 days rental
console.log(`Regular customer rental price: $${regularPrice}`);

const premiumPrice = calculateRentalPrice(car2, 3, premiumCustomer); // 3 days rental with discount
console.log(`Premium customer rental price: $${premiumPrice}`);

// Show returning cars
regularCustomer.returnCar(car1);
premiumCustomer.returnCar(car2);

// Show maintenance
Maintenance(car3, 3000); // Car3 goes for maintenance and is available after 3 seconds