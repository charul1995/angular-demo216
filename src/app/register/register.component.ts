import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FromService } from '../formSubmit.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  message: String;
  error = false;
  
  constructor(private http: HttpClient,
              private auth: AuthService,
              private formService: FromService,
              private myRoute: Router) { 
  }
  
  ngOnInit() {
      if (this.auth.isLoggednIn()) {
        this.myRoute.navigate(["dashboard"]);
      }
  }

  onSubmit() {
    this.formService.register(this.model).subscribe(
        (val) => {
            if(val.status==true){
              this.myRoute.navigate(["login"]);
            }else{
              this.message = val.message;
              this.error =true;
            }
        });
  }
}