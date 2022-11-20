import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo';
import { map, Observable, Observer,catchError,of} from 'rxjs';
import { UserInfoService } from '../user-info.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  fetchUserUrl = "http://34.29.2.62/studentForm/listUser";
  users : UserInfo[] = [];
  headers= new HttpHeaders().set('Access-Control-Allow-Origin', '*');

  constructor(private _http : HttpClient) { }

  ngOnInit(): void {
    this.getListUser();
    }

    getListUser() {
    console.log('list user called');
      this._http.get<UserInfo[]>(this.fetchUserUrl, { 'headers': this.headers}).subscribe(
        (data) => {
        this.users = data;
        console.log("users ", this.users);
    });
        
    }
}