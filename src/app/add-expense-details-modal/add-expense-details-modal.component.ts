import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {AddTravelDispatcher} from '../redux/dispatcher/add-travel.dispatcher';
import {IProjectDetails, IExpense} from '../shared/project-details.interface';

@Component({
  selector: 'app-add-expense-details-modal',
  templateUrl: './add-expense-details-modal.component.html',
  styleUrls: ['./add-expense-details-modal.component.css']
})
export class AddExpenseDetailsModalComponent implements OnInit {

  private currentProject:IProjectDetails;
  @select('currentProject') currentProject$: Observable<IProjectDetails>;

  private expense:IExpense={ date:'',type:'',description:'',amount:0};

  private addExpense(){
    console.log('Inside addExpense');
    console.log(this.currentProject);
    if(this.currentProject.expenses === undefined){
        this.currentProject.expenses=[];
    }
    this.currentProject.expenses.push(this.expense);
    console.log(this.currentProject);
      
    this.addTravelDispatcher.addExpenseDetails(this.currentProject);
    this.expense ={ date:'',type:'',description:'',amount:0};
  }

  constructor(private addTravelDispatcher: AddTravelDispatcher) { }

  ngOnInit() {
        this.currentProject$.subscribe(name => {
          console.log('currentProject is changed to::::::::'+name);
           this.currentProject = name;
      });
  }

}
