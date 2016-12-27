import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {select} from 'ng2-redux';
import {AddTravelDispatcher} from '../redux/dispatcher/add-travel.dispatcher';
import {IProjectDetails, IExpense} from '../shared/project-details.interface';

@Component({
  selector: 'app-show-expense-details-modal',
  templateUrl: './show-expense-details-modal.component.html',
  styleUrls: ['./show-expense-details-modal.component.css']
})
export class ShowExpenseDetailsModalComponent implements OnInit {

  private currentProject:IProjectDetails;
  @select('currentProject') currentProject$: Observable<IProjectDetails>;
  constructor() { }

  ngOnInit() {
      this.currentProject$.subscribe(name => {
          console.log('currentProject is changed to::::::::'+name);
           this.currentProject = name;
      });
  }

}
