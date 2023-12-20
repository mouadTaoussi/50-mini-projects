const container = document.querySelector('.container');
const pricesSwitcher = document.querySelector('#prices-switch');
let pricingPlan = [
	{
		name: "Starter",
		price : 20,
		price_discount: 20,
		type: 'month',
		currency: "£",
		features: [
			"20GB Storage",
			"10 Databases",
			"10 Realtime connections",
			"24/24 Support",
		]
	},
	{
		name: "Pro",
		price : 55,
		price_discount: 55,
		type: 'month',
		currency: "£",
		features: [
			"100GB Storage",
			"50 Databases",
			"30 Realtime connections",
			"Weekly Security checks",
			"24/24 Support",
		]
	},
	{
		name: "Enterprise",
		price : 95,
		price_discount: 95,
		type: 'month',
		currency: "£",
		features: [
			"500GB Storage",
			"100 Databases",
			"100 Realtime connections",
			"Daily Security checks",
			"Performance reports",
			"24/24 Support",
		]
	}
]

// Load Data
window.onload = loadData();
function loadData(){
	container.innerHTML = "";
	for (var i = 0; i < pricingPlan.length; i++) {
		let features = "";
		
		for (var io = 0; io < pricingPlan[i].features.length; io++) {
			features += `
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
				  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
				</svg>
			${pricingPlan[i].features[io]}</li>
			`
		}

		container.innerHTML += `
			<article class="card">
				<div class="card-header">${pricingPlan[i].name}</div>
				<div class="card-content">
					<h1 class="price price-starter">
						<strong class="sum">
						${pricingPlan[i].price_discount + pricingPlan[i].currency}</strong>/${pricingPlan[i].type}
					</h1>
					<p class="discounts">Get 10% Disount when paying yearly!</p>
					<div class="features">
						<ul>
							${features}
						</ul>
					</div>
				</div>
				<div class="card-footer">
					<button>Buy it</button>
					<button>Try it</button>
				</div>
			</article>
		`
	}
}


// Price toggle
pricesSwitcher.onchange = (e)=>{
	// if true then set price to yearly plan
	console.log(e.target)
	if (e.target.checked) {
		for (var i = 0; i < pricingPlan.length; i++) {
			const price = pricingPlan[i].price;
			pricingPlan[i].price = calcPrice(price, 'year');
			pricingPlan[i].price_discount = calcPrice(price, 'year', 10 /* 10% Discount */);

			pricingPlan[i].type = "year";
		}
		// Update the DOM
		loadData();
	}else {
		for (var i = 0; i < pricingPlan.length; i++) {
			const price = pricingPlan[i].price;
			pricingPlan[i].price = calcPrice(price, 'month');
			pricingPlan[i].price_discount = calcPrice(price, 'month');

			pricingPlan[i].type = "month";
		}
		// Update the DOM
		loadData();
	}
}
// Price calculator
function calcPrice(price, type, yearly_discounts = 0) {
	let price_rough;
	let price_net;

	if (type == 'year') {
		price_rough = price * 12;

	}else if (type == 'month') {
		price_rough = price / 12;
	}

	// Calculate discounts if exits
	price_net = price_rough - ((price_rough * yearly_discounts) / 100);

	return Math.ceil(price_net);
	// return price_rough;
}
// updatePrices(event)
// function updatePrices(e) {
// 	console.log(e.path[0].checked)
// }