import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private formbuilder:FormBuilder,
   
  ) {}

  loginform=this.formbuilder.group({
    username:'',
    password:''
  })
  
  ngOnInit(): void {
  //this.title=localStorage.getItem("token")
  }
  title : string="";
  onSubmit(){
    let formdata=this.loginform.value;
    if(formdata.username===environment.user.username && formdata.password==environment.user.password){
      this.title=formdata.username
      window.localStorage.setItem('token',JSON.stringify(this.title))
      alert("login Success")
    
   }
   else{
     alert("Enter valid credentials")
   }
    
  }

}