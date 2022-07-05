const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

async function main() {
	
	await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster-estacionamento.bkrntcc.mongodb.net/?retryWrites=true&w=majority`);
	console.log('Conectado ao mongo db');
}

main()
.catch((err) => console.log(err));

module.exports = mongoose;