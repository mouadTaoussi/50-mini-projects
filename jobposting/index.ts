import express, { Request, Response, Application } from "express";
import { connect } from "mongoose";
// import resolver from './graphql';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';

const app: Application = express();

async function rungql(){
	const apollo_server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [resolver],
			validate: true
		}),
		context: ({ req, res }) => ({ req, res }),
		// playground: true
	})


	connect('mongodb://localhost:27017/jobposting', 
		// { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, 
		()=>{
		console.log('MongoDB up and running')
	})


	app.get('/', (req: Request, res: Response)=>{
		res.send('Hello World')
	})


	app.listen(8080, ()=> {
		console.log('Server up and running');
	}) 
} 

rungql();