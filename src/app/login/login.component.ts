import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FromService } from '../formSubmit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  message: String;
  error = false;

  constructor(private http: HttpClient,
              private auth: AuthService,
              private formService: FromService,
              private myRoute: Router) { 
      if (this.auth.isLoggednIn()) {
        this.myRoute.navigate(["dashboard"]);
      }
  }
  
  ngOnInit() {      
  }
  onSubmit() {
    this.formService.login(this.model).subscribe(
        (val) => {
            if(val.status==true){
              this.data = this.auth.sendUser(val.data)
              this.myRoute.navigate(["dashboard"]);
            }else{
              this.message = val.message;
              this.error =true;
            }
        });
  }

}