import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/authguard/auth.guard';

import { CreatefeedbackComponent } from './components/feedback/createfeedback/createfeedback.component';
import { ViewfeedbackComponent } from './components/feedback/viewfeedback/viewfeedback.component';
import { FormerviewfeedbackComponent } from './components/feedback/formerviewfeedback/formerviewfeedback.component';
import { CreateproposalComponent } from './components/projectproposal/createproposal/createproposal.component';
import { ViewproposalComponent } from './components/projectproposal/viewproposal/viewproposal.component';
import { EditproposalComponent } from './components/projectproposal/editproposal/editproposal.component';
import { DeleteproposalComponent } from './components/projectproposal/deleteproposal/deleteproposal.component';
import { CreatetaskComponent } from './components/task/createtask/createtask.component';
import { ViewtaskComponent } from './components/task/viewtask/viewtask.component';
import { EdittaskComponent } from './components/task/edittask/edittask.component';
import { DeletetaskComponent } from './components/task/deletetask/deletetask.component';
import { CreateprojectComponent } from './components/project/createproject/createproject.component';
import { ViewprojectComponent } from './components/project/viewproject/viewproject.component';
import { EditprojectComponent } from './components/project/editproject/editproject.component';
import { DeleteprojectComponent } from './components/project/deleteproject/deleteproject.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'farmer/feedback/create', component: CreatefeedbackComponent },
  { path: 'farmer/feedback/myfeedback', component: FormerviewfeedbackComponent },
  //project Proposal
  { path: 'employee/proposal/create', component: CreateproposalComponent },
  { path: 'employee/proposal/view', component: ViewproposalComponent },
  { path: 'employee/proposal/edit', component: EditproposalComponent },
  { path: 'employee/proposal/delete', component: DeleteproposalComponent },

  { path: 'employee/project/view', component: ViewprojectComponent },

  { path: 'employee/task/view', component: ViewtaskComponent },

  { path: 'employee/task/edit', component: EdittaskComponent },


  // Project
  { path: 'manager/project/create', component: CreateprojectComponent },
  { path: 'manager/project/view', component: ViewprojectComponent },
  { path: 'manager/project/edit', component: EditprojectComponent },
  { path: 'manager/project/delete', component: DeleteprojectComponent },
  //Task
  { path: 'manager/task/create', component: CreatetaskComponent },
  { path: 'manager/task/view', component: ViewtaskComponent },
  { path: 'manager/task/edit', component: EdittaskComponent },
  { path: 'manager/task/delete', component: DeletetaskComponent },
  //feedback
  { path: 'employee/feedback/create', component: CreatefeedbackComponent },
  { path: 'employee/feedback/myfeedback', component: ViewfeedbackComponent},
  { path: 'manager/feedback/view', component: ViewfeedbackComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
