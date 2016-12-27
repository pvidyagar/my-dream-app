import {combineReducers} from 'redux';
import {AppNameReducer} from '../reducer/app-name.reducer';
import {ProjectDetailsReducer} from '../reducer/project-details.reducer';
import {IProjectDetails} from '../../shared/project-details.interface';
import {CurrentProjectReducer} from '../reducer/current-project.reducer'; 


export interface AppStore {
    appName?:string;
    projectDetails?:IProjectDetails [];
    currentProject?:IProjectDetails;
}

export const rootReducer = combineReducers<AppStore>({
    appName: AppNameReducer,
    projectDetails: ProjectDetailsReducer,
    currentProject: CurrentProjectReducer
});
