const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID, GraphQLList, GraphQLSchema } = require('graphql');
const JobPostingModel = require('./model')

const user = new GraphQLObjectType({
    name: "User",
    fields:{
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})
const contact = new GraphQLObjectType({
    name: "Contact",
    fields:{
        _id: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString }
    }
})

const JobPosting = new GraphQLObjectType({
    name: "JobPosting",
    fields: {
        _id: { type: GraphQLString },
        user: { type: user },
        title: { type: GraphQLString },
        salary: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString },
        contact: { type: contact }
    }
})
const GetJobs = new GraphQLObjectType({
    name: 'queries',
    fields : {
        jobs : {
            type : GraphQLList(JobPosting),
            args: {
                limit : { type: new GraphQLNonNull(GraphQLInt) },
                skip : { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve : async (parent,args) => {
                const data = await JobPostingModel.find().limit(args.limit).skip(args.skip);
                return data;
            }
        },
        job : {
            type : JobPosting,
            args : {
                id: {
                    type: GraphQLString,
                }
            },
            resolve: async (parent,args) => {
                const data = await JobPostingModel.findById(args.id);
                return data;
            }
        }
       
    }
})
const postJob = new GraphQLObjectType({
    name : "mutations",
    fields : {
        postJob : {
            type: JobPosting,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                // user: { type: user },
                title : { type: GraphQLNonNull(GraphQLString) },
                salary : { type: GraphQLNonNull(GraphQLString) },
                type : { type: GraphQLNonNull(GraphQLString) },
                description : { type: GraphQLNonNull(GraphQLString) },
                // contact: { type: contact }
                phone : { type: GraphQLNonNull(GraphQLString) },
                job_email : { type: GraphQLNonNull(GraphQLString) },
            },
            resolve : async (parent,args) => {
                const newPost = await JobPostingModel({
                    user: {
                        name: args.name,
                        email: args.email
                    },
                    title: args.title,
                    salary: args.salary,
                    type: args.type,
                    description: args.description,
                    contact: {
                        phone : args.phone,
                        email : args.job_email
                    }
                }).save()

                return newPost;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query : GetJobs,
    mutation: postJob
})