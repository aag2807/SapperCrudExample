const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:2017";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
let collection;

export async function getCollection() {
	if(!collection){
		const client = await MongoClient.connect(url,options);
		const db = client.db('animals');
	}
}