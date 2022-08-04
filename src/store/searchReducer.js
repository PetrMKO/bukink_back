
const defaultSearchState = {
    city: {
        id: '',
        name: ''
    },
    checkIn:'',
    checkOut:''
}

export const searchReducer = (state = defaultSearchState, action) => {
    switch (action.type){
        case "SET_CITY":
            console.log(action.payload)
            return {...state, city: {
                    id: action.payload.id,
                    name: action.payload.name
                }}

        case "SET_CHECKIN":
            return {...state, checkIn: action.payload}

        case "SET_CHECKOUT":
            return {...state, checkOut: action.payload}
        default:
            return state
    }
}
