import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoService } from './user-info.service';
import { routingComponents } from './app-routing.module';
import { ShowusersComponent } from './showusers/showusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    ShowusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
