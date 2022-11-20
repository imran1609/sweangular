import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { UserInfo } from '../userInfo';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.form.css']
})
export class SurveyComponent implements OnInit {
  
  checkBox: string = "";
  

  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {}
  
  onSubmit(data:any){
    this.checkBox = this.checkBox.replace(/,\s*$/, "");
    let userInfo = new UserInfo(data.name, data.address, this.checkBox, data.city, data.dos, data.email, 
      data.interest, data.recommendation, data.review, data.state, data.telephone, data.url, data.zip);
       console.log("userInfo " , userInfo)
       this.registerService.register(userInfo).subscribe(
         data => console.log("Success"),
         error => console.error("Error")
       )
  
      }
      
      checkBoxvalue(event : any){
        var eventValue = new String(event.target.value); 
        this.checkBox = this.checkBox.concat(eventValue.toString());
        this.checkBox  = this.checkBox.concat(", ");
     }
    }
     
