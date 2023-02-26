import {INCREMENT,DECREMENT,INCREMENT_BY_VALUE} from './type-actions'

const init={
    conter:0
}

const Reducer=(state=init,action)=> {
    switch (action.type) {
        case INCREMENT:
            return {conter:state.conter+1}
            case DECREMENT:
                return {conter:state.conter-1}
                // case INCREMENT_BY_VALUE:
                // return {conter:state.conter+action.payload}
        default:
            return state
    }
}

export default Reducer