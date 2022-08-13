const Submit = document.querySelector('.submit-btn').onclick = (e)=>{
	e.preventDefault();
	const name = document.querySelector('.name').value;
	const email = document.querySelector('.email').value;
	const title = document.querySelector('.title').value;
	const salary = document.querySelector('.salary').value;
	const type = document.querySelector('.job-type').value;
	const description = document.querySelector('.description').value;
	const phone = document.querySelector('.phone').value;
	const job_email = document.querySelector('.job-email').value;

	if (name == "" || email == "" || title == "" || salary == "" || type == "" || description == "") {
		displayAlert('Please Fill all the inputs')
		return 
	}
	if (phone == "" && job_email == "") {
		displayAlert('Please fill one/two of the contacts')
		return 
	}
	if (typeof phone != 'number') {
		displayAlert('Please put numbers in phone field')
		return 
	}
	
	axios({
		method: "POST",
		url: "/graphql",
		headers : {
			'Content-Type': 'application/json',
		},
		data : JSON.stringify({
			query : `
				mutation ($name: String!, $email: String!, $title: String!, $salary: String!, $type: String!, $description: String!, $phone: String!, $job_email: String!)  {
				  postJob(name: $name, email: $email title : $title, salary: $salary , type: $type, description: $description, phone: $phone, job_email: $job_email){
				    user {
				      name
				      email
				    }
				    _id
				    title
				    salary
				    type
				    description
				    contact {
				      phone
				      email
				    }
				  }
				}
			`,
			variables : {
				name,
				email,
				title,
				salary,
				type,
				description,
				phone,
				job_email
			}
		})
	}).then((res)=>{
		console.log(res)
	}).catch((err)=>{
		console.log(err)
	})
}

function displayAlert(message) {
	const alert = document.querySelector('.alert');
	alert.innerText = message;
	alert.style.display = 'block';

	setTimeout(()=>{
		alert.style.display = "none";
		alert.innerText = "";
	},3000)
}