import {Component,OnInit } from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {AppStore, rootReducer} from './redux/store/index';
const createLogger = require('redux-logger');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   private appTitle:string = 'My Dream APP  !!!';
    
    constructor(private ngRedux: NgRedux<AppStore>) {

    this.ngRedux.configureStore(
      rootReducer,
      {},
      [createLogger()]
    );
  }
        
  ngOnInit() {
  }
    
    
}
