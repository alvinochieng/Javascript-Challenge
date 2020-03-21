// from data.js
var tableData = data;

// YOUR CODE HERE!
// selecting table body in the html 
var tableBody = d3.select("tbody");

tableData.forEach(function(uforeport){
    var row = tableBody.append("tr");
    Object.entries(uforeport).forEach(function([key, value]){
        var cell= tableBody.append("td");
        cell.text(value);
});
});
