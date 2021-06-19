import { GET_DATA, GETFIVE_DATA } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case GET_DATA:
            console.log('GET_DATA')
            const todo = action.data.filter(data => data.id <= 500)
            console.log(action.data)
            return { ...state, comment_data: action.data }
        case GETFIVE_DATA:
            console.log('GETFIVE_DATA')
            const result = action.data.filter(data => data.id <= 5)
            console.log(result)
            console.log(state)
            const array = { ...state, user_data: result }
            return array
        default:
            return state

    }
}

export default reducer