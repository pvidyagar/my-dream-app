import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {AddTravelDispatcher} from '../redux/dispatcher/add-travel.dispatcher';
import {IProjectDetails} from '../shared/project-details.interface';

@Component({
  selector: 'app-add-project-details-modal',
  templateUrl: './add-project-details-modal.component.html',
  styleUrls: ['./add-project-details-modal.component.css']
})
export class AddProjectDetailsModalComponent implements OnInit {

  private addTravelModalName:string;
  private projectInfo:IProjectDetails={customerName:'',projectName:'',startDate:'',endDate:''}; 
  private projectDetails:IProjectDetails[];
    private startDate:Date;
    private endDate:Date;
    
  @select('addTravelModalName') addTravelModalName$: Observable<string>; 
  @select('projectDetails') projectDetails$: Observable<IProjectDetails[]>;
  
  private setProjectDetails(){
      //let currentProject:IProjectDetails={"projectName":this.projectInfo.projectName , 
      //  "customerName":this.projectInfo.customerName , "startDate":"1 Jan 2016", "endDate":"15 Feb 2016"} ;
      console.log('Startdate is ='+this.startDate);
      console.log('Enddate is ='+this.endDate);
      //let startDataArr = this.startDate.split(' ');
      debugger;
      this.projectInfo.startDate = this.startDate.toDateString();
      //let endDataArr = this.endDate.split(' ');
      this.projectInfo.endDate = this.endDate.toDateString();
      //console.log(" this is converted Date" + this.startDate.toDateString());
      this.projectDetails.push(this.projectInfo);
      console.log(this.projectInfo);
      this.addTravelDispatcher.addProjectDetails(this.projectDetails,this.projectInfo);
      this.router.navigate(['/addExpense']);  
  } 
  constructor(private addTravelDispatcher: AddTravelDispatcher,
  private router:Router) { }

  ngOnInit() {
      
      this.projectDetails$.subscribe(name => {
          console.log('projectDetails is changed to::::::::'+name);
           this.projectDetails = name;
      });
  }

}
