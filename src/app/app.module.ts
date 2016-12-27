import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { MenuComponent } from './menu/menu.component';
import { AppNameDispatcher } from './redux/dispatcher/app-name.dispatcher';
import { AddTravelDispatcher} from './redux/dispatcher/add-travel.dispatcher';
import { ShowTravelComponent } from './show-travel/show-travel.component';
import { AddProjectDetailsModalComponent } from './add-project-details-modal/add-project-details-modal.component';
import { AddExpenseDetailsModalComponent } from './add-expense-details-modal/add-expense-details-modal.component';
import { ShowExpenseDetailsModalComponent } from './show-expense-details-modal/show-expense-details-modal.component';
//import { DatePickerModule } from 'ng2-datepicker';
import { DatepickerModule as YourAlias } from 'angular2-material-datepicker'

@NgModule({
  declarations: [
    AppComponent,
    MainSliderComponent,
    MainHeaderComponent,
    LoginComponent,
    LandingComponent,
    AboutComponent,
    MenuComponent,
    ShowTravelComponent,
    AddProjectDetailsModalComponent,
    AddExpenseDetailsModalComponent,
    ShowExpenseDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AppRoutingModule,
    YourAlias
  ],
  providers: [NgRedux,
    AppNameDispatcher,
    AddTravelDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
