'use strict';

const requireInfo = require('./require-info');
const retrieveInfo = require('./retrieve-info');

module.exports = function (req, res) {
	requireInfo(req, function (err, options) {
		if (err) {
			return res.status(404).send();
		}

		retrieveInfo(options.email, function (err, results) {
			if (err || !password || results.password !== options.password) {
				return res.status(404).send();
			}

			return res.status(200).send(results);
		});
	});
};