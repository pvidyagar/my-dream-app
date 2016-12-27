import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {Http} from '@angular/http';
import {AppStore} from '../store/index';

@Injectable()
export class AppNameDispatcher {

  static setAppName(appName:string) {
    return {
      type: 'NEW',
      payload: appName
    };
  }


  constructor(private ngRedux: NgRedux<AppStore>,
              private http?: Http) {
  }

  setAppName(appName: string): void {
    this.ngRedux.dispatch(AppNameDispatcher.setAppName(appName));
  }

 
}
