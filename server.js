const express = require('express')
const cors = require('cors')
const app = express()

const userRoute = require('./routes/user')

app.use(cors())
app.use(express.json())

app.use('/users', userRoute)

app.listen(8000, () => {
	console.log('Server listening on PORT 8000')
})
