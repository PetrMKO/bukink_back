
const defaultState = {
    hotels: []
}

const ADD_HOTELS_TO_RESULT_LIST = "ADD_HOTELS_TO_RESULT_LIST",
      CLEAR_RESULT_LIST = "CLEAR_RESULT_LIST"

export const searchHotelsResultReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_HOTELS_TO_RESULT_LIST:
            return {...state, hotels: state.hotels.concat(action.payload)}
        case CLEAR_RESULT_LIST:
            return {...state, hotels: []}
        default:
            return state
    }
}


export const addToListAction = (payload) => ({type: ADD_HOTELS_TO_RESULT_LIST, payload})
export const clearListAction = (payload) => ({type: CLEAR_RESULT_LIST, payload})