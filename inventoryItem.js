function createInventoryItem(name, category, price) {
    return {
      name: name,
      category: category,
      price: price,
      describeItem() {
        console.log(Item: ${this.name});
        console.log(Category: ${this.category});
        console.log(Price: $${this.price});
      }
    };
  }
  
  
  function addItemDiscount(item, discountPercent) {
    return {
      ...item,
      discountPercent: discountPercent,
      discountedPrice: item.price - (item.price * (discountPercent / 100)),
      applyDiscount() {
        console.log(Discounted Price for ${this.name}: $${this.discountedPrice});
      }
    };
  }
  
  
  const item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem();
  
  
  const discountedItem = addItemDiscount(item, 10);
  discountedItem.applyDiscount();