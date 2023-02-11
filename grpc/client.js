const PROTO_PATH = '../grpc/user.proto'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	arrays: true,
})
const UserService = grpc.loadPackageDefinition(packageDefinition).UserService
const client = new UserService(
	'localhost:3000',
	grpc.credentials.createInsecure()
)

module.exports = client
