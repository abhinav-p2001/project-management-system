// Function to create promises with a delay for each data item
function delayedFetch(dataArray) {
    return dataArray.map((item, index) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(item);
            }, index * 2000); // Delays 2 seconds per item
        });
    });
}

// Function to execute the promises in order and log the resolved data
async function executefetch(promisesArray) {
    for (const promise of promisesArray) {
        const data = await promise; // Wait for the promise to resolve
        console.log(data);          // Log the resolved data
    }
}

// Test the implementation
const data = ['A', 'B', 'C', 'D'];  // Sample dataset
const promises = delayedFetch(data); // Generate promises
executefetch(promises); // Execute and log data in order