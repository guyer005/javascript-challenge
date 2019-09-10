// from data.js
var tableData = data;
//var table = document.getElementById("ufo-table");



    var tbl = document.getElementById('ufo-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'row');
    }


//var table = document.getElementById("ufo-table");
//var row = table.insertRow(0);
//var cell1 = row.insertCell(0);
//var cell2 = row.insertCell(1);
//cell1.innerHTML = "NEW CELL1";
//cell2.innerHTML = "NEW CELL2";

//function myFunction() {
//    var table = document.getElementById("myTable");
//    var row = table.insertRow(0);
//    var cell1 = row.insertCell(0);
//    var cell2 = row.insertCell(1);
//    cell1.innerHTML = "NEW CELL1";
//    cell2.innerHTML = "NEW CELL2";
//  }

data.forEach(function(tableData) {
       console.log(tableData);
});

data.forEach(function(tableData) {
       console.log(tableData);
    var row = tbody.append("tr");
});
    
data.forEach(function(tableData) {
       console.log(tableData);
       var row = tbody.append("tr");
    
       Object.entries(tableData).forEach(function([key, value]) {
         console.log(key, value);
       });
     });
    

 data.forEach(function(tableData) {
   console.log(tableData);
   var row = tbody.append("tr");

   Object.entries(tableData).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
   });
 });


 data.forEach(function(tableData) {
       console.log(tableData);
       var row = tbody.append("tr");
       Object.entries(tableData).forEach(function([key, value]) {
         console.log(key, value);
         // Append a cell to the row for each value
         // in the weather report object
         var cell = row.append("td");
         cell.text(value);
       });
     });
    

// YOUR CODE HERE!
