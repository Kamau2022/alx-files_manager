const redis = require('redis');
const client = redis.createClient();

class RedisClient {
constructor(redisClient){
this.redisClient = redis.createClient();
client.on('error', err => console.log(`${err}`));
};
function isAlive(){
client.on('connect', () => {
  return true;
});
}
}
async function{

}
};
