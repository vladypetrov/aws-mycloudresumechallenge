window.onload = function() {
    // Replace with your API Gateway endpoint URL
    const API_URL = "https://np10rbs1bl.execute-api.us-east-1.amazonaws.com/vladydev-stage";

    fetch(API_URL, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // Parse the 'body' property to get the nested object
        const parsedBody = JSON.parse(data.body);
        
        console.log("Current visitor count:", parsedBody.visitorCount);
        
        // Display the count on your website
        document.getElementById("visitorCount").textContent = parsedBody.visitorCount;
    })
    .catch(error => {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitorCount").textContent = "Error loading count";
    });
};
