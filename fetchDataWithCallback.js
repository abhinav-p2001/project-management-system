function fetchDataWithCallback(callback) {
    setTimeout(() => {
        let success = Math.random() > 0.5; 

        if (success) {
            callback(null, "Data fetched successfully");
        } else {
            callback("Error fetching data", null); 
        }
    }, 1000);
}
fetchDataWithCallback((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
