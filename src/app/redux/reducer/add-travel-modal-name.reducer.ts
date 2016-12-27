import {ADD_TRAVEL_ACTIONS} from '../../shared/add-travel-actions.types';

const INITIAL_STATE:String ='' ;


export function AddTravelModalNameReducer(state:String = INITIAL_STATE, action: any) {

  switch (action.type) {
    case ADD_TRAVEL_ACTIONS.PROJECT_DETAILS_MODAL_VIEW:
      return  action.payload;

    case ADD_TRAVEL_ACTIONS.EXPENSE_DETAILS_MODAL_VIEW:
      console.log('Inside AddTravelModalNameReducer returning :'+action.payload);
       return action.payload;
          
    case ADD_TRAVEL_ACTIONS.ADD_PROJECT_DETAILS:
        return INITIAL_STATE;

    default:
      return state;
  }
}
