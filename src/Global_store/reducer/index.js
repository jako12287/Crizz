import {GETALL} from '../actions/types'

let initialState = {
    countries:[]
    
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GETALL:
            return{
                ...state,
                countries: [...action.payload]
            } 

        default: 
            return state

    }

}