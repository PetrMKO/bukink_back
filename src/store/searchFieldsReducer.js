
const defaultSearchState = {
    city: {
        id: '',
        name: ''
    },
    checkIn:'',
    checkOut:''
}

//Actions name
const SET_CITY = "SET_CITY",
      SET_CHECKIN = "SET_CHECKIN",
      SET_CHECKOUT = "SET_CHECKOUT";

export const searchFieldsReducer = (state = defaultSearchState, action) => {
    switch (action.type){
        case SET_CITY:
            // console.log(action.payload)
            return {...state, city: {
                    id: action.payload.id,
                    name: action.payload.name
                }}

        case SET_CHECKIN:
            return {...state, checkIn: action.payload}

        case SET_CHECKOUT:
            return {...state, checkOut: action.payload}
        default:
            return state
    }
}


//Action creators

export const setCityAction = (payload) => ({type: SET_CITY, payload})
export const setCheckInAction = (payload) => ({type: SET_CHECKIN, payload})
export const setCheckOutAction = (payload) => ({type: SET_CHECKOUT, payload})