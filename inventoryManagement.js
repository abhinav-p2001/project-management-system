const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
];
const lowStockProducts = products.filter(product => product.stock < 100);
console.log("Low Stock Products:", lowStockProducts);
const totalReorderCostByCategory = reorderList.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = 0;
    }
    acc[product.category] += product.reorderCost;
    return acc;
}, {});

console.log("Total Reorder Cost by Category:", totalReorderCostByCategory);
const sortedReorderCostByCategory = Object.entries(totalReorderCostByCategory)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [category, totalCost]) => {
        acc[category] = totalCost;
        return acc;
    }, {});

console.log("Sorted Reorder Cost by Category:", sortedReorderCostByCategory);