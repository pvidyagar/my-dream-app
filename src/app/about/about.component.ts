import { Component, OnInit } from '@angular/core';
import {AppNameDispatcher} from '../redux/dispatcher/app-name.dispatcher';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private  appName: string=''; 
    
  constructor(private appNameDispatcher:AppNameDispatcher) { }

  ngOnInit() {
  }
    
  private changeAppName(){
    console.log('Inside change app name :'+this.appName);      
    this.appNameDispatcher.setAppName(this.appName);
  }

}
