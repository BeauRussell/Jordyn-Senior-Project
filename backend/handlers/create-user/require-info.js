'use strict';

const moment = require('moment');
const uuid = require('uuid/v4');
const bcrypt = require('bcrypt');

const SALT_LENGTH = 16;

module.exports = function requireInfo (req, cb) {
	let options = {};

	if (!req.body.email || !req.body.password || !req.body.name) {
		const err = new Error('Missing info from join form');
		console.log(err, {body: req.body});
		return cb(err, null);
	}

	const creation = moment().utc().toISOString();
	const publicId = uuid();

	options.email = req.body.email;
	options.date = creation;
	options.name = req.body.studentName;
	options.username = req.body.username;
	options.publicId = publicId;

	bcrypt.genSalt(SALT_LENGTH, function (error, salt) {
		if (error) {
			console.log('Error creating salt');
			console.log(error);
			return cb(error, null);
		}

		options.salt = salt;

		bcrypt.hash(req.body.password, salt, function (e, hash) {
			if (e) {
				console.log('Error creating password hash');
				console.log(e);
				return cb(e, null);
			}

			options.passHash = hash;
		});
	});

	return cb(null, options);
};