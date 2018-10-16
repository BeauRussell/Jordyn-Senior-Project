'use strict';

const requireInfo = require('./require-info');
const insertUser = require('./insert-user');
const moment = require('moment');
const uuid = require('uuid/v4');

module.exports = function (req, res) {
	requireInfo(req, function (err) {
		if (err) {
			return res.status(500).send('Error verifying info', {err: err, info: req.body});
		}

		const creation = moment().utc().toISOString();
		const publicId = uuid();

		const options: {
			email: req.body.email,
			password: req.body.password,
			date: creation,
			name: req.body.studentName,
			username: req.body.username,
			userPublicId: publicId
		};

		insertUser(options, function (err) {
			if (err) {
				return res.status(500).send('Error creating user', {err: err, options: options});
			}
			res.status(204).send();
		});
	});
};