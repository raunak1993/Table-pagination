export const GET_DATA = 'GET_DATA'
export const GET_NEXT_PAGE_DATA = 'GET_NEXT_PAGE_DATA'
export const GET_PREV_PAGE_DATA = 'GET_PREV_PAGE_DATA'

export const getData = () => {
    return {
        type: GET_DATA
    }
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