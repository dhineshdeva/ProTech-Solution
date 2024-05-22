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
import { CreatefeedbackComponent } from './components/feedback/createfeedback/createfeedback.component';
import { ViewfeedbackComponent } from './components/feedback/viewfeedback/viewfeedback.component';
import { FormerviewfeedbackComponent } from './components/feedback/formerviewfeedback/formerviewfeedback.component';
import { ManagernavComponent } from './components/nav/managernav/managernav.component';
import { EmployeenavComponent } from './components/nav/employeenav/employeenav.component';
import { CreateproposalComponent } from './components/projectproposal/createproposal/createproposal.component';
import { EditproposalComponent } from './components/projectproposal/editproposal/editproposal.component';
import { ViewproposalComponent } from './components/projectproposal/viewproposal/viewproposal.component';
import { DeleteproposalComponent } from './components/projectproposal/deleteproposal/deleteproposal.component';
import { CreateprojectComponent } from './components/project/createproject/createproject.component';
import { ViewprojectComponent } from './components/project/viewproject/viewproject.component';
import { EditprojectComponent } from './components/project/editproject/editproject.component';
import { CreatetaskComponent } from './components/task/createtask/createtask.component';
import { ViewtaskComponent } from './components/task/viewtask/viewtask.component';
import { EdittaskComponent } from './components/task/edittask/edittask.component';
import { DeletetaskComponent } from './components/task/deletetask/deletetask.component';
import { AllfeedbackComponent } from './components/feedback/allfeedback/allfeedback.component';
import { ViewemployeeComponent } from './components/viewemployee/viewemployee.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ErrorComponent,
    NavbarComponent,
    CreatefeedbackComponent,
    ViewfeedbackComponent,
    FormerviewfeedbackComponent,
    ManagernavComponent,
    EmployeenavComponent,
    CreateproposalComponent,
    EditproposalComponent,
    ViewproposalComponent,
    DeleteproposalComponent,
    CreateprojectComponent,
    ViewprojectComponent,
    EditprojectComponent,    
    CreatetaskComponent,
    ViewtaskComponent,
    EdittaskComponent,
    DeletetaskComponent,
    AllfeedbackComponent,
    ViewemployeeComponent,

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
