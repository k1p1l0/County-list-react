const initialState = {
	countries: [],
	fetching: false,
    fetched: false,
    error: null
};

export default function reducer (state = initialState, action) {
	switch (action.type) {
		case 'FETCH_COUNTRIES_FULFILLED': {
		  return {
		          ...state,
		          fetching: false,
		          fetched: true,
		          countries: action.payload,
		        }
		}
    }

	return state;
}