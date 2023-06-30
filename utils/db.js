const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/files_manager';
class DBClient {
  constructor() {
    this.client = new MongoClient(url);
    this.clientconnect = false;
    MongoClient.connect(url, (err, client) => {
      if (err) {
        console.error('Failed to connect to MongoDB:', err);
        this.clientconnect = false;
        return;
      }
      console.log('Connected to MongoDB');
      this.clientconnect = true;
      client.close();
    });
  }

  isAlive() {
    return this.clientconnect;
  }

  async nbUsers() {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    console.log('Connected successfully to server');
    const db = client.db(this.files_manager);
    const collection = db.collection('users');
    return collection.countDocuments();
  }

  async nbFiles() {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    console.log('Connected successfully to server');
    const db = client.db(this.files_manager);
    const collection = db.collection('files');
    return collection.countDocuments({});
  }
}

const dbClient = new DBClient();
export default dbClient;
