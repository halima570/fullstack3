//src/JS/Reducers/rootReducers.js

const initialState = {
    posts: [
//         {
//             id: 1,
//             title: 'my first post',
//             content: 'my first content'
//         }
 ]}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return {
                 posts: [ action.payload]
            }
        default:
            return state
    }
}

export default rootReducer