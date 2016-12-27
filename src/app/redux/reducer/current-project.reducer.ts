import {ADD_TRAVEL_ACTIONS} from '../../shared/add-travel-actions.types';
import {IProjectDetails} from '../../shared/project-details.interface';

//const INITIAL_STATE:IProjectDetails={customerName:'',projectName:'',startDate:'',endDate:''};
const INITIAL_STATE:any={};

export function CurrentProjectReducer(state = INITIAL_STATE, action: any) {

  switch (action.type) {

    case ADD_TRAVEL_ACTIONS.ADD_PROJECT_DETAILS:
          return action.payload.currentProject ;
    
    case ADD_TRAVEL_ACTIONS.ADD_EXPENSE_DETAILS:
          return action.payload ;
          
    default:
      return state;
  }
}
