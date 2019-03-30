import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(private myRoute: Router) { }
  sendUser(user: string) {
    localStorage.setItem("LoggedInUser", user)
    localStorage.setItem("LoggedInUserEmail", user.email);
    localStorage.setItem("LoggedInUserId", user.id);
    localStorage.setItem("LoggedInUserName", user.username);
  }
  getUser() {
    return localStorage.getItem("LoggedInUser")
  }
  getUserEmail() {
    return localStorage.getItem("LoggedInUserEmail")
  }
  getUserId() {
    return localStorage.getItem("LoggedInUserId")
  }
  getUserName() {
    return localStorage.getItem("LoggedInUserName")
  }
  isLoggednIn() {
    return this.getUser() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("LoggedInUserEmail");
    localStorage.removeItem("LoggedInUserId");
    localStorage.removeItem("LoggedInUserName");
    this.myRoute.navigate(["login"]);
  }
}