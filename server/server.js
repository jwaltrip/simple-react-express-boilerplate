const express = require('express');
const database = require('./db');

const app = express();

app.get('/api/customers', (req, res) => {
  // hardcoded data to start with
  // this data will usually come from mongoDB
  const customers = [
    {id: 1, firstName: 'Jake', lastName: 'Waltrip'},
    {id: 2, firstName: 'Mary', lastName: 'Smith'},
    {id: 3, firstName: 'John', lastName: 'Doe'}
  ];

  res.json(customers);
});

app.get('/data', (req, res)=> {
  res.send(database);
})

const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
