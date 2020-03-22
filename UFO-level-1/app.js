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

// working on the search 
var searchButton = d3.select("#button");

searchButton.on("click", function() {
    
    // prevents console results from flashing for a quick second.
    event.preventDefault();

    var input  = d3.select("#example");

    var inputValue = input.property("value");

    var Searchfilter = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(Searchfilter);
    
    var searchResults = d3.select("#res");

    tableBody.html("");

    Searchfilter.forEach(rows => {
        
        tableBody.append("tr");

        for (key in rows){

            var cell = tableBody.append("td");

            cell.text(rows[key]);
        }
    });
});
