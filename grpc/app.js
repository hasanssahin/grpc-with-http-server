const PROTO_PATH = '../user.proto'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
require('../database/connection')
const User = require('../models/user')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true,
})

const userProto = grpc.loadPackageDefinition(packageDefinition)
const server = new grpc.Server()
server.addService(userProto.UserService.service, {
	createNewUser: async (call, callback) => {
		const reqBody = call.request.user
		const user = new User(reqBody)
		const result = await user.save()
		if (!result) {
			console.log('FAIL')
		}
		callback(null, { user })
	},
})

server.bindAsync(
	'127.0.0.1:3000',
	grpc.ServerCredentials.createInsecure(),
	(error, port) => {
		server.start()
		console.log('Server listening on PORT 3000')
	}
)
