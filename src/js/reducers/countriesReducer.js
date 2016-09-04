  const initialState = {
	countries: []
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case 'FETCH_COUNTRIES_FULFILLED': {
		  return {
		          ...state,
		          countries: action.payload,
		    };
		}

		case 'COUNTRY_ADD': {
			return {
		          ...state,
		          countries: [...state.countries, action.payload],
		    };
		}
    }

	return state;
}