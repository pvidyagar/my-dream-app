import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {Http} from '@angular/http';
import {AppStore} from '../store/index';
import {ADD_TRAVEL_ACTIONS} from '../../shared/add-travel-actions.types';
import {IProjectDetails} from '../../shared/project-details.interface';


@Injectable()
export class AddTravelDispatcher {


  
  static addProjectDetails(projectDetails:IProjectDetails[],currentProject:IProjectDetails){
      var projectInfo = {'allProjects': projectDetails,'currentProject':currentProject};
      return {
        type: ADD_TRAVEL_ACTIONS.ADD_PROJECT_DETAILS,
        payload: projectInfo
    };
  }
    
  static addExpenseDetails(currentProject:IProjectDetails) {
    return {
      type: ADD_TRAVEL_ACTIONS.ADD_EXPENSE_DETAILS,
      payload: currentProject
    };
  }

  constructor(private ngRedux: NgRedux<AppStore>,
              private http?: Http) {
  }

 
  addProjectDetails(projectDetails:IProjectDetails[],currentProject:IProjectDetails){
    this.ngRedux.dispatch(AddTravelDispatcher.addProjectDetails(projectDetails,currentProject));
  }
 
  addExpenseDetails(currentProject:IProjectDetails) {
    this.ngRedux.dispatch(AddTravelDispatcher.addExpenseDetails(currentProject));
  }
 
}
