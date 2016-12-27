import {ADD_TRAVEL_ACTIONS} from '../../shared/add-travel-actions.types';
import {IProjectDetails} from '../../shared/project-details.interface';

const INITIAL_STATE:IProjectDetails[] =[] ;


export function ProjectDetailsReducer(state = INITIAL_STATE, action: any) {

  switch (action.type) {

    case ADD_TRAVEL_ACTIONS.ADD_PROJECT_DETAILS:
       //return action.payload;
          console.log('reaching the add project reducer:'+action.payload);
          return action.payload.allProjects ;

    default:
      return state;
  }
}
