import { GET_DATA } from "../actions/table";

let initialState = {
    pageData: []
}

export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: return {
            pageData: action.payload
        }
        default: return state
    }
}