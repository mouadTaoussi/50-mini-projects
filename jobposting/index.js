const express = require('express');
const mongoose = require('mongoose');
const mainQuery = require("./graphql");
const { graphqlHTTP } = require('express-graphql');
const JobpostingModel = require('./model');


mongoose.connect('mongodb://localhost:27017/jobposting',()=>{
    console.log('mongodb un and running')
})

// async function initData() {
   
// }
// initData()

const app = express();
 
app.use('/graphql', graphqlHTTP({schema: mainQuery, graphiql: true}))

app.use('/', express.static('public'))

app.listen(8080,()=>{
    console.log('Server up and running');
})