import {CONTINENT, GETALL, SEARCH} from '../actions/types'

let initialState = {
    countries:[],
    search:'',
    continent:''
    
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GETALL:
            return{
                ...state,
                countries: [...action.payload]
            } 
        case SEARCH:
            return{
                ...state,
                search: action.payload
            }
        case CONTINENT:
            return{
                ...state,
                continent: action.payload
            }

        default: 
            return state

    }

}