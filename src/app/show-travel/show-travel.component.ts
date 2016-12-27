import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddTravelDispatcher} from '../redux/dispatcher/add-travel.dispatcher';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {IProjectDetails} from '../shared/project-details.interface';

@Component({
  selector: 'app-show-travel',
  templateUrl: './show-travel.component.html',
  styleUrls: ['./show-travel.component.css']
})
export class ShowTravelComponent implements OnInit {

  private addTravelModalName:string;
  private projectDetails:IProjectDetails [];
    
  @select('addTravelModalName') addTravelModalName$: Observable<string>; 
  @select('projectDetails') projectDetails$: Observable<IProjectDetails[]>; 
    
  private addNewTravel(){
        this.router.navigate(['/addProject']);
  }
    
  constructor(private router:Router,
    private addTravelDispatcher:AddTravelDispatcher) { }

    
  ngOnInit() {
      this.addTravelModalName$.subscribe(name => {
          console.log('addTravelModalName is changed to::::::::'+name);
           this.addTravelModalName = name;
      });
       this.projectDetails$.subscribe(name => {
          console.log('projectDetails is changed to::::::::'+name);
           this.projectDetails = name;
      });
  }

}
