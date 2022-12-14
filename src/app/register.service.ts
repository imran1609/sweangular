import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './userInfo';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient : HttpClient) { }

  url = "http://34.29.2.62/studentForm/saveForm";
  
  register(userInfo: UserInfo){
    console.log("userInfo from register " ,userInfo);
    return this.httpclient.post<UserInfo>(this.url, userInfo);

  }
}
