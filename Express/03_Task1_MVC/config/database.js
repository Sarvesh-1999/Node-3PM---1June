import mongodb from "mongodb";

export async function connectDB() {
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  const database = client.db("Task1-MVC");
  const collection = await database.createCollection("users");
  return collection;
}
