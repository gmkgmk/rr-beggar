const initState = {
    checkoutStatus: {
        checkoutPending: false,
        error: null,
    }
}
export default function checkoutStatusReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_SUCCEEDED":
            return { ...action.data }
        default:
            return state
    }
}


