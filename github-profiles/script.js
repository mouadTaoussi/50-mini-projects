const APIURL = 'https://api.github.com/users/';

const container  = document.querySelector('.container div');

async function getData(name){
	const data = await axios({method:"GET", url: APIURL+name})
	const repos = await axios({method: "GET", url: APIURL+name+'/repos'})
	return { data: data, repos: repos };
}

async function loadData(e){
	if (e.keyCode == 13) {
		// const input = e.path[0].value; // path element is depercated
		const input = e.srcElement.value
		const gettingData = await getData(input);
		const data = gettingData.data.data;
		const public_repos = gettingData.repos.data;

		let repos = ``;

		for (var i = 0; i < 4; i++) {
			repos += `<a href="${public_repos[i].html_url}" target="_blank">${public_repos[i].name}</a>`
		}

		const user = `
		<article class="user">
			<img src="${data.avatar_url}" width="150" height="150">
			<div class="user-info">
				<a href="${data.html_url}" target="_blank"><h3 class="user-name">${data.login}</h3></a>
				<p class="description">${data.bio}</p>
				<div class="quantitative-info">
					<p class="following">Following: ${data.following}</p>
					<p class="followers">Followers: ${data.followers}</p>
					<p class="repo">Repositories: ${data.public_repos}</p>
				</div>
				<div class="pinned-repos">
					${repos}
				</div>
			</div>
		</article>
		`
		container.innerHTML = user;
	}

}
// loadData()