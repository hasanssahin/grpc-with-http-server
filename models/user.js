const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joi = require('joi')
const { string } = require('joi')

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

const schema = Joi.object({
	name: Joi.min(2).max(50),
	surname: Joi.min(2).max(50),
	username: Joi.min(5).max(50),
	email: Joi.email(),
	password: Joi.min(6),
})

user.methods.joiValidation = function (userObject) {
	schema.string().required().trim()
	return schema.validate(userObject)
}

const User = mongoose.model('users', user)

module.exports = User
