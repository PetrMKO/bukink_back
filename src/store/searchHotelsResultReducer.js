const defaultState = {
    hotels: []
}

const ADD_HOTELS_TO_RESULT_LIST = "ADD_HOTELS_TO_RESULT_LIST",
      CLEAR_RESULT_LIST = "CLEAR_RESULT_LIST"

export const searchHotelsResultReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_HOTELS_TO_RESULT_LIST:
            return {...state, hotels: [...state.hotels, action.payload]}
        case CLEAR_RESULT_LIST:
            return {...state, hotels: []}
    }
}