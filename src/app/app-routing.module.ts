import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { ShowusersComponent } from './showusers/showusers.component';
const routes: Routes = [
  {path : 'survey', component: SurveyComponent},
  {path : 'users', component: ShowusersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SurveyComponent , ShowusersComponent]
