export function fetchCountries () {
  return {
    type: "FETCH_COUNTRIES_FULFILLED",
    payload: [{
				id: +new Date() + Math.random(),
				name: 'Russia123',
				capital: 'Moscow',
				location: 'Asia'
			}, {
				id: +new Date() + Math.random(),
				name: 'UKRAINE123',
				capital: 'Kiev',
				location: 'Europe'
			}, {
				id: +new Date() + Math.random(),
				name: 'USA',
				capital: 'Washington',
				location: 'South America'
			}
		]
  };
}

export function addCountry (country) {
  return {
    type: "COUNTRY_ADD",
    payload: country
  };
}