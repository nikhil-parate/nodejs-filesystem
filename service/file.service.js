var fs = require('fs');
var dir = './tmp';
const service ={
   register(data,res){
    console.log("here");
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log("dir created");
    }
    let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
console.log(date,month,year);
    fs.writeFile(`./tmp/${date}-${month}-${year}.txt`, `current-timestamp->${Date.now()}`, function (err) {
        if (err) throw err;               
        console.log('Results Received');
      });  
      fs.readdir("./tmp", (err, data) => {
        if (err) console.log("Error !!");
        else console.log(data);
      })
   res.send({message:"successfully created"});
   return res.statusCode = 200;
},
  files(data,res){
    fs.readdir("./tmp", (err, data) => {
      if (err) console.log("Error !!");
      else {console.log(data);
          res.send(data);
      }
    })
  }
}
module.exports = service;