const initialData = {
    isLoggedFirstTime: false,
}
const BoardingReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_BOARDING":
            return {
                ...state,
                isLoggedFirstTime: true,
            }
        default: return state;
    }
}

export default BoardingReducer;