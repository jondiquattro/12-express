'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];


function handle404(error, req, res) {
  console.log('not found');
  req.status(404).send('incorrect user input');
  req.end;
 }
 
 
 app.use(express.json());




app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/categories', (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = {name,author,title,article};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/categories/:id', (req,res,next) => {
  let newObject = ObjectConstructor(req.body);
  if(newObject.valid = false){
    console.log('invalid object please enter a valid author, id, title');
  }
  else{db[req.params.id+1]=req.body}
 
});

app.delete('/categories/:id', (req,res,next) => {
 delete db[req.params.id+1];

});
function ObjectConstructor(obj){
  this.author = obj.author;
  this.id = obj.id;
  this.title = obj.title
  this.valid = true;

  if ((!this.author) || (!this.id)||(!this.title)){
    console.log('not a correct object')
    this.valid = false;
  }
}

app.use('*', handle404);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

