import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';

import { CommonModule } from '@angular/common';


import { ViewcropComponent } from './components/crop/viewcrop/viewcrop.component';
import { UpdatecropComponent } from './components/crop/updatecrop/updatecrop.component';
import { DeletecropComponent } from './components/crop/deletecrop/deletecrop.component';
import { NewcropComponent } from './components/crop/newcrop/newcrop.component';


import { CreateagroComponent } from './components/agrochemicals/createagro/createagro.component';
import { ViewagroComponent } from './components/agrochemicals/viewagro/viewagro.component';
import { UpdateagroComponent } from './components/agrochemicals/updateagro/updateagro.component';
import { DeleteagroComponent } from './components/agrochemicals/deleteagro/deleteagro.component';
import { CreaterequestComponent } from './components/request/createrequest/createrequest.component';
import { ViewrequestComponent } from './components/request/viewrequest/viewrequest.component';
import { UpdaterequestComponent } from './components/request/updaterequest/updaterequest.component';
import { DeleterequestComponent } from './components/request/deleterequest/deleterequest.component';
import { CreatefeedbackComponent } from './components/feedback/createfeedback/createfeedback.component';
import { ViewfeedbackComponent } from './components/feedback/viewfeedback/viewfeedback.component';
import { FormerviewfeedbackComponent } from './components/feedback/formerviewfeedback/formerviewfeedback.component';
import { ManagernavComponent } from './components/nav/managernav/managernav.component';
import { EmployeenavComponent } from './components/nav/employeenav/employeenav.component';
import { CreateproposalComponent } from './components/projectproposal/createproposal/createproposal.component';
import { EditproposalComponent } from './components/projectproposal/editproposal/editproposal.component';
import { ViewproposalComponent } from './components/projectproposal/viewproposal/viewproposal.component';
import { DeleteproposalComponent } from './components/projectproposal/deleteproposal/deleteproposal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorComponent,
    NavbarComponent,

    NewcropComponent,

    ViewcropComponent,
    UpdatecropComponent,
    DeletecropComponent,

    CreateagroComponent,
    ViewagroComponent,
    UpdateagroComponent,
    DeleteagroComponent,
    CreaterequestComponent,
    ViewrequestComponent,
    UpdaterequestComponent,
    DeleterequestComponent,
    CreatefeedbackComponent,
    ViewfeedbackComponent,
    FormerviewfeedbackComponent,
    ManagernavComponent,
    EmployeenavComponent,
    CreateproposalComponent,
    EditproposalComponent,
    ViewproposalComponent,
    DeleteproposalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
