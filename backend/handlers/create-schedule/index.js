'use strict';

const requireInfo = require('./require-info');
const insertSchedule = require('./insert-schedule');

module.exports = function (req, res) {
	requireInfo(req, function (err, options) {
		if (err) {
			return res.status(500).send(['Error verifying info', {err: err, info: req.body}]);
		}

		insertSchedule(options, function (err) {
			if (err) {
				return res.status(500).send(['Error creating schedule', {err: err, options: options}]);
			}
			res.status(204).send();
		});
	});
};