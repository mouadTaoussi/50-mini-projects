const { Schema, model } = require('mongoose');







const User = new Schema({
	name: { type: String },
	email: { type: String },
});
const Contact = new Schema({
	phone: { type: String },
	email: { type: String },
});
const JobPosting = new Schema({
	user : { type: User },
	title: { type: String },
	salary: { type: String },
	type: { type: String },
	description: { type: String },
	contact : { type: Contact }
});


module.exports = model('JobPosting', JobPosting)