const API_URL = 'http://jsonplaceholder.typicode.com/photos'

export const GET_DATA = 'GET_DATA'
export const GET_NEXT_PAGE_DATA = 'GET_NEXT_PAGE_DATA'
export const GET_PREV_PAGE_DATA = 'GET_PREV_PAGE_DATA'

export const getData = () => async (dispatch) => {
    let queryParams = '?_start=0&_limit=5'
    let response = await fetch(`${API_URL}${queryParams}`)
    let data = await response.json()

    dispatch({ type: GET_DATA, payload: data })

}

export const getNextPage = () => {
    return {
        type: GET_NEXT_PAGE_DATA
    }
}

export const getPrevPage = () => {
    return {
        type: GET_PREV_PAGE_DATA
    }
}