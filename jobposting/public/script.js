let skip = 0;
const limit = 10;

window.onload = ()=> {
	axios({
		method: "POST",
		url: "/graphql",
		headers : {
			'Content-Type': 'application/json',
		},
		data : JSON.stringify({
			query : `
				query {
				  jobs (limit: 10, skip: 0){
				    _id
				    title
				    salary
				    type
				  }
				}
			`
		})
	}).then((res)=>{
		skip += limit;
		const jobsElement = document.querySelector('.jobs');
		
		for (let i = 0; i < res.data.data.jobs.length; i++) {
			const jobElement = document.createElement('div');
			const titleElement = document.createElement('h2');
			const salaryElement = document.createElement('p');
			const typeElement = document.createElement('p');

			jobElement.classList.add('job')
			jobElement.setAttribute("onclick",`fetchJob("${res.data.data.jobs[i]._id}")`);
			titleElement.innerText = res.data.data.jobs[i].title;
			salaryElement.innerText = res.data.data.jobs[i].salary;
			typeElement.innerText = res.data.data.jobs[i].type;

			jobElement.appendChild(titleElement);
			jobElement.appendChild(salaryElement);
			jobElement.appendChild(typeElement);
			jobsElement.appendChild(jobElement);	
		}
		
	}).catch((err)=>{
		console.log(err)
	})
}

document.querySelector('.load-more').onclick = ()=>{
	axios({
		method: "POST",
		url: "/graphql",
		headers : {
			'Content-Type': 'application/json',
		},
		data : JSON.stringify({
			query : `
				query {
				  jobs (limit: ${limit}, skip: ${skip}){
				    _id
				    title
				    salary
				    type
				  }
				}
			`
		})
	}).then((res)=>{
		skip += limit;
		const jobsElement = document.querySelector('.jobs');
		
		for (let i = 0; i < res.data.data.jobs.length; i++) {
			const jobElement = document.createElement('div');
			const titleElement = document.createElement('h2');
			const salaryElement = document.createElement('p');
			const typeElement = document.createElement('p');

			jobElement.classList.add('job')
			jobElement.setAttribute("onclick",`fetchJob("${res.data.data.jobs[i]._id}")`);
			titleElement.innerText = res.data.data.jobs[i].title;
			salaryElement.innerText = res.data.data.jobs[i].salary;
			typeElement.innerText = res.data.data.jobs[i].type;

			jobElement.appendChild(titleElement);
			jobElement.appendChild(salaryElement);
			jobElement.appendChild(typeElement);
			jobsElement.appendChild(jobElement);	
		}
		

	}).catch((err)=>{
		console.log(err)
	})

	

}


function fetchJob(id) {

	axios({
		method: 'POST',
		url: '/graphql',
		headers: {
			'Content-Type': "application/json"
		},
		data : JSON.stringify({
			query: `
				query{
					job (id : "${id}") {
						user {
							name
							email
						}
						title
						salary
						type
						description
						contact {
							email
							phone
						}
					}
				}
			`,
		})
	}).then((res)=>{
		const data = res.data.data.job;

		const jobDetailContainer = document.querySelector('.job-detail-container');
		jobDetailContainer.innerHTML = '';

		// scroll up
		window.scrollTo(0, 0);

		const jobDetailElement = document.createElement('div');
		const titleElement = document.createElement('h2');
		const salaryElement = document.createElement('p');
		const descriptionElement = document.createElement('p');
		const typeElement = document.createElement('p');
		const phoneElement = document.createElement('p');
		const emailElement = document.createElement('a');

		jobDetailElement.classList.add('job-detail');

		titleElement.innerText = data.title;
		salaryElement.innerText = data.salary;
		descriptionElement.innerText = data.description;
		typeElement.innerText = data.type;
		phoneElement.innerText = data.contact.phone;
		emailElement.innerText = data.contact.email;
		emailElement.setAttribute('href', 'mailto:'+data.contact.email);
		emailElement.style.color = 'blue';
		emailElement.style.textDecoration = 'underline';

		jobDetailElement.appendChild(titleElement)
		jobDetailElement.appendChild(salaryElement)
		jobDetailElement.appendChild(descriptionElement)
		jobDetailElement.appendChild(typeElement)
		jobDetailElement.appendChild(phoneElement)
		jobDetailElement.appendChild(emailElement)


		jobDetailContainer.appendChild(jobDetailElement);
		
		jobDetailContainer.style.display = "block";
		// document.querySelector('.jobs').style.width = "50%";
		// document.querySelector('section').style.width = "100%";
	})
	.catch((err)=>{

	})
}