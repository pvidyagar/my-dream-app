import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {AboutComponent} from './about/about.component';
import {ShowTravelComponent} from './show-travel/show-travel.component';
import {AddProjectDetailsModalComponent} from './add-project-details-modal/add-project-details-modal.component';
import {AddExpenseDetailsModalComponent} from './add-expense-details-modal/add-expense-details-modal.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LandingComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'show',
        component: ShowTravelComponent
      },
      {
        path: 'addExpense',
        component: AddExpenseDetailsModalComponent
      },
      {
        path: 'addProject',
        component: AddProjectDetailsModalComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
