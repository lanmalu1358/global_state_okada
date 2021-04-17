import { GET_DATA, GETFIVE_DATA } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
        case GETFIVE_DATA:
            const result = action.data.filter(data => data.id <= 5)
            console.log(result)
            console.log(state)
            const array = { ...state, user_data: result }
            return array
        default:
            return result
    }
}

export default reducer