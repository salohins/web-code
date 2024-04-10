const initialState = {
    
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            if (Object.keys(action.payload).length === 0) {
                return initialState
            }

            else
                return { ...state, ...action.payload }
        default:
            return state
    }
}