const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose
	.connect('mongodb://127.0.0.1:27017/database_name')
	.then(console.log('Veritabanına bağlanıldı'))
	.catch((err) => console.log('Bağlantıda hata çıktı: ' + err))
