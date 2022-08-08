const express = require('express');
const mongoose = require('mongoose');
const mainQuery = require("./graphql");
const { graphqlHTTP } = require('express-graphql');
const JobpostingModel = require('./model');


mongoose.connect('mongodb://localhost:27017/jobposting',()=>{
    console.log('mongodb un and running')
})



async function initData() {
    // await JobpostingModel({
    //     user: {
    //         name: "Walid bendaou",
    //         email: "walid@gmail.com"
    //     },
    //     title: 'Front-end dev',
    //     salary: "40000USD/m",
    //     type: "Full-Time",
    //     description: 'No title provided',
    //     contact: {
    //         phone : "0550254524",
    //         email : "jobs@gmail.com"
    //     }
    // }).save()
    
    // await JobpostingModel({
    //     user: {
    //         name: "Mouad Taoussi",
    //         email: "mouad@gmail.com"
    //     },
    //     title: 'Back-end dev',
    //     salary: "40000USD/m",
    //     type: "Full-Time",
    //     description: 'No title provided',
    //     contact: {
    //         phone : "0550254524",
    //         email : "jobs@gmail.com"
    //     }
    // }).save()
    // const d = await JobpostingModel.find()
    // console.log(d)

}
initData()


const app = express();
 
app.use('/graphql', graphqlHTTP({schema: mainQuery, graphiql: true}))

app.use('/', express.static('public'))

app.listen(8080,()=>{
    console.log('Server up and running');
})