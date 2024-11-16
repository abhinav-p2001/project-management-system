// Factory function to create product objects
function createProduct(name, price, category) {
    return {
        name,
        price,
        category,
        applyDiscount(discountPercentage) {
            this.price = this.price - (this.price * discountPercentage) / 100;
        },
    };
}

// Factory function to create a category manager
function createCategoryManager(categoryName) {
    const products = []; // Internal list of products in the category

    return {
        categoryName,
        addProduct(product) {
            if (product.category === this.categoryName) {
                products.push(product);
            } else {
                console.log(`Product category mismatch: ${product.name} cannot be added to ${this.categoryName}.`);
            }
        },
        removeProduct(productName) {
            const index = products.findIndex((p) => p.name === productName);
            if (index !== -1) {
                products.splice(index, 1);
                console.log(`${productName} removed from ${this.categoryName}.`);
            } else {
                console.log(`${productName} not found in ${this.categoryName}.`);
            }
        },
        listProducts() {
            console.log(`Products in ${this.categoryName}:`);
            products.forEach((p) => {
                console.log(`- ${p.name}: $${p.price.toFixed(2)}`);
            });
        },
        applyDiscountToCategory(discountPercentage) {
            products.forEach((product) => {
                product.applyDiscount(discountPercentage);
            });
            console.log(`Applied ${discountPercentage}% discount to all products in ${this.categoryName}.`);
        },
    };
}

// Testing the system

// Create products
const product1 = createProduct("Laptop", 1000, "Electronics");
const product2 = createProduct("Headphones", 200, "Electronics");
const product3 = createProduct("Shirt", 50, "Clothing");

// Create category managers
const electronicsManager = createCategoryManager("Electronics");
const clothingManager = createCategoryManager("Clothing");

// Add products to category managers
electronicsManager.addProduct(product1);
electronicsManager.addProduct(product2);
clothingManager.addProduct(product3);

// List products in categories
electronicsManager.listProducts();
clothingManager.listProducts();

// Apply discount to a single product
product1.applyDiscount(10);
console.log(`${product1.name} price after 10% discount: $${product1.price.toFixed(2)}`);

// Apply discount to all products in a category
electronicsManager.applyDiscountToCategory(15);
electronicsManager.listProducts();