const client = require('../grpc/client')
const createNewUser = async (req, res) => {
	client.createNewUser({ user: req.body }, (err, response) => {
		if (!err) {
			const user = response.user
			res.json(user)
		}
	})
}
module.exports = {
	createNewUser,
}
