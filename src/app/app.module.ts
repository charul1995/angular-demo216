import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { FromService } from './formSubmit.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, HomeComponent, DashboardComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, FromService, AuthGuard]
  
})
export class AppModule { }
