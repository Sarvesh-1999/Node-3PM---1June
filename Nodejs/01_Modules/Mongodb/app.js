import mongodb from "mongodb";

async function connectDB() {
  //! STEP 1: CREATE A CONNECTION
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

  //! STEP 2: CREATE A DATABASE
  const database = client.db("App1");

  //! STEP 3: CREATE A COLLECTION
  const collection = await database.createCollection("users");

  //   console.log("Database connection established ✅");

  //! CREATE A SINGLE USER -> insertOne()
  //   collection.insertOne({ fname: "John", lname: "Doe", age: 20 });
  //   console.log("USER CREATED");

  //! CREATE MULTIPLE USERS -> insertMany()
  //   collection.insertMany([
  //     { fname: "Jane", lname: "Doe", age: 25 },
  //     { fname: "James", lname: "Doe", age: 10 },
  //   ]);
  //   console.log("CREATED MULTIPLE USERS");

  //! GET SINGLE USER -> findOne({filter})
  //   let user = await collection.findOne({ fname: "John" });
  //   console.log(user);

  //! GET ALL USERS -> findMany({})
  //   let users = await collection.find({}).toArray();
  //   console.log(users);

  //! UPDATE A USER -> updateOne({filter} , {updatedValue})
  //   let result = await collection.updateOne(
  //     { fname: "John" },
  //     { $set: { age: 30 } },
  //   );
  //   console.log(result);

  //! DELETE A USER -> deleteOne({filter})
  //   let resp = await collection.deleteOne({ fname: "Jane" });
  //   console.log(resp);

  //! DELETE ALL USERS -> deleteMany({})
  // let resp = await collection.deleteMany({});
  // console.log(resp);
}

connectDB();
