import {legacy_createStore} from 'redux'
const reducerFn=(state={counter:10},action)=>{
    if(action.type==="INC"){
        return {counter:state.counter+1}
    }
    if(action.type==="DEC"){
        return {counter:state.counter-1}
    }
    if(action.type==="addby10"){
        return{counter:state.counter+action.payload}
    }
    return state
}
const store=legacy_createStore(reducerFn)
export default store