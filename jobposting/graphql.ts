import { ObjectType, Query, Mutation, Resolver, Field, Arg, Args, InputType } from "type-graphql";

@ObjectType()
class User {
	@Field(type => String, {nullable: false})
	name: string;

	@Field(type => String, {nullable: false})
	email: string;
}
interface User {
	name: string;
	email: string;
}

@ObjectType()
class ApplicationContact {
	@Field(type => String, { nullable: false })
	phone: string;


	@Field(type => String, {nullable: false })
	email: string;
}
interface ApplicationContact {
	phone :string;
	email :string;

}
@ObjectType()
class JobPosting {
	@Field(type => User,{nullable: false})
	user: User;

	@Field(type => String, {nullable: false})
	title: string;

	@Field(type => String, {nullable: true})
	description : string;

	@Field(type => ApplicationContact, {nullable: true})
	contact: ApplicationContact;
}


@Resolver(of => JobPosting)
class JobPostingResolver {

	@Query(() => [JobPosting])
	getJobs() : any {
		return [{
			user: {
				name: "Mouad", email: "mouad@gmail.com"
			},
			title: "Front-end developer",
			description : "1 year experience in VueJs/Laravel",
			contact : {
				email: "jobs@surveyapp.com",
				phone: "0502606951"
			}
		}]
	}
}

export default JobPostingResolver;