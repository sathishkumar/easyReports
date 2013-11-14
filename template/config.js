
module.exports = function(){

return {
    // mode in which server should be run 
    // possible options are dev and prod modes, use prod mode to e
    mode: "dev", 
    // port to listen
    port: 8080,
    //cluster size when run in prod mode. by default.. number of cpu cores would be taken as cluster size
    //"clusters":4,
    // relative or absloute path to models folder that hold model json
    models: "models",
    //db configurations for mysql database connection
    db: {
        host: "localhost",
        user: "root",
        password: "mysql",
        database: "easyrep"
    },
    //db configuration for mongodb datastore connection
    mongo: {
        host: "localhost",
        port: 27017,
        database: "easyrep",
        opts:{
            auto_reconnect: true,
            poolSize: 5
        }
    },
    // memcache connection used for keyval cache and  list repsonse cache
    cache: {
        keyval: { // used to get data  from cache in format method of display
            servers: "127.0.0.1:11211", 
            opts:{
                poolSize:10,
                timeout:5
            }
        },
        list: { // used to cache response based url and data  
            defaultCacheDuration:600, // 10 minutes
            servers: "127.0.0.1:11211", 
            opts:{
                poolSize:10
            }
        }
    },
    /* Uncomment to configure email properties
     email:{
      host:"host address",
      port:569,
      auth:{user:"username",pass:"password"},
      templates:"templates",
      error:{ //used in error reportin
        from:"from@gmail.com",
        to:"a@gmail.com,b@gmail.com",
        subject:"Easyrep Error report"
      }
    },*/
    // logger config.. 
    logger: {
       path: "logs",
       level: "info" // change to debug logs debug statements from framework
    }
  };
}();


