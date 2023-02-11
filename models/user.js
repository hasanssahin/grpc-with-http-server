const mongoose = require('mongoose')
const Schema = mongoose.Schema

const features = {
	type: String,
	required: true,
	minlength: 2,
	maxlength: 50,
	trim: true,
}

const user = new Schema({
	name: features,
	surname: features,
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50,
		trim: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		minlength: 6,
	},
})

const User = mongoose.model('users', user)

module.exports = User
