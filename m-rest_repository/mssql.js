 
var config = {
    user: 'nasirdb',
    password: 'Mac@1234',
    server: 'xubkfrhe1n.database.windows.net', // You can use 'localhost\\instance' to connect to named instance 
    database: 'my_db',
    port:"1433",
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
 


var sql     = require('mssql');


sql.connect(config, function(err) {
    var request = new sql.Request();
    request.stream = true; // You can set streaming differently for each request
    request.query('select * from guest.profile'); // or request.execute(procedure);

    request.on('recordset', function(columns) {
        // Emitted once for each recordset in a query
        console.log(columns);
    });

    request.on('row', function(row) {
        // Emitted for each row in a recordset
        console.log(row);
    });

    request.on('error', function(err) {
        // May be emitted multiple times
        console.log(err);
    });

    request.on('done', function(returnValue) {
        // Always emitted as the last one
        console.log(returnValue);
    });

});



