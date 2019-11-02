// taking from demo code and modifying class activity code

var tableData = data;

// define the key objects to interact with

var resetbtn = d3.select("#reset-btn");
var filterbtn = d3.select("#filter-btn");
var date_time = d3.select("#datetime");
var tbody = d3.select("tbody");

//specify the column headers
var columns = ["date", "city", "state", "country", "shape", "duration", "comments"]


// getting the data into the table which failed on prior coding

var tabulate = (data) => data.forEach(function(info){
    var row = tbody.append("tr");

    Object.entries(info).forEach(function([key, value]){
        var cell = row.append("td");

        cell.text(value);
    });
});

tabulate(tableData);



// filter the data here

filterbtn.on("click", function () {

    d3.event.preventDefault();

    var inputValue = date_time.property("value");

    var filteredData = tableData.filter(date => date.datetime == inputValue);
    console.log(filteredData)

    tbody.html("");

    tabulate(filteredData);

});



// reset data filtering

resetbtn.on("click", function () {

  tbody.html("");

  tabulate(tableData);

});

