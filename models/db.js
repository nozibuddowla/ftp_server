const mysql = require('mysql');

function getConnection(callback) {

	var connection = mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'ftpserver'
	});

	connection.connect(function (err) {
		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}
	});

	callback(connection);
}

module.exports = {
	getResults: function (sql, callback) {
		getConnection(function (connection) {
			connection.query(sql, function (error, results) {
				callback(results);
			});

			connection.end(function (err) {
			});
		});
	},
	execute: function (sql, callback) {
		getConnection(function (connection) {
			connection.query(sql, function (error, status) {
				if (status) {
					callback(true);
				} else {
					console.log(error);
					callback(false);
				}
			});

			connection.end(function (err) {
			});
		});
	}
}