const db = require('./db');

module.exports = {

	getById: function (id, callback) {
		var sql = "select * from events WHERE id=" + id;
		console.log(sql);
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	getByAction: function (callback) {
		var sql = "select * from movies WHERE genre='Action' ";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	getByThriller: function (callback) {
		var sql = "select * from movies WHERE genre='Thriller' ";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	getByComedy: function (callback) {
		var sql = "select * from movies WHERE genre='Comedy' ";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	getAll: function (callback) {
		var sql = "select * from events";
		db.getResults(sql, function (results) {
			callback(results);
		});

	},

	insert: function (user, callback) {
		var sql = "insert into users (name, username, email, password, usertype, createdat) VALUES ('" + user.name + "' , '" + user.username + "' ,  '" + user.email + "' , '" + user.password + "' , '" + user.userType + "', current_timestamp() )";

		//console.log(sql);

		db.execute(sql, function (status) {
			callback(status);
		});
	},
	insertEvent: function (user, callback) {
		var sql = "INSERT INTO `events` VALUES ('','" + user.eventName + "' ,'" + user.eventPicture + "', '" + user.creatorId + "' ,  '" + user.description + "','" + user.categoryId + "' , '" + user.goalAmount + "' ,'" + user.goalDate + "' , '" + user.isApproved + "'  , current_timestamp() )";

		db.execute(sql, function (status) {
			callback(status);
		});
	},
	update: function (user, callback) {
		var sql = "UPDATE events SET isApproved = 1 where id=" + user.data;
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	updateAll: function (event, callback) {
		console.log(event);
		var sql = "UPDATE events SET eventName='" + event.eventName + "', description ='" + event.description + "', categoryId=" + event.categoryId + ", goalAmount='" + event.goalAmount + "' ,goalDate='" + event.goalDate + "' where id=" + event.data;
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	delete: function (id, callback) {
		var sql = "DELETE FROM events WHERE id=" + id;
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	deleteEvent: function (id, callback) {
		var sql = "DELETE FROM events WHERE id=" + id;
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	approve: function (id, callback) {
		var sql = "UPDATE events SET isApproved = 1 where id=" + id;
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	decline: function (id, callback) {
		var sql = "UPDATE events SET isApproved = 0 where id=" + id;
		db.execute(sql, function (status) {
			callback(status);
		});
	}
}