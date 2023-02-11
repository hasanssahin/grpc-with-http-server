const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.json({
		mesaj: 'BAŞARILI',
	})
})

app.listen(3000, () => {
	console.log('Server 3000 portundan ayaklandırıldı')
})
