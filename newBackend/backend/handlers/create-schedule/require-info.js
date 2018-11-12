'use strict';

const uuid = require('uuid/v4');

module.exports = function requireInfo (req, cb) {
	let options = {};

	if (!req.body.userPublicId) {
		const err = new Error('Missing info from join form');
		console.log(err, {body: req.body});
		return cb(err, null);
	}

	options.publicId = uuid();
	options.userPublicId = req.body.userPublicId;
	options.dorm = req.body.dorm;
	options.classes = req.body.classes;

	return cb(null, options);
};