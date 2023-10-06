const {check} = require('express-validator')
const repo = require('./repository')
module.exports = {

validateCardNumber : check('cno')

	// To delete leading and trailing space
	.trim()

	// Validate height to accept
	// only decimal number
	.isCreditCard()

	// Custom message
	.withMessage('Must be a valid credit card number')
}
