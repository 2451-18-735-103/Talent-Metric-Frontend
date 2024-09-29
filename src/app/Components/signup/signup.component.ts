import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

 hide=true;
constructor(private userService :UserService,
  private snack:MatSnackBar){
}

public user:any ={
  userName:'',
  userFirstName:'',
  userLastName:'',
  userPassword:'',
  mobileNumber:''
}
ngOnInit():void{

}
formSubmit(){
  console.log(this.user);
  if(this.user.userName=='' || this.user.userName==null) {
   // alert('user is required !!');
   this.snack.open("User name is required",'', {
    duration: 3000,
    
});
    return ;
  }

  console.log(this.user);
  if(this.user.userFirstName=='' || this.user.userFirstName==null ){
    this.snack.open("User firstname is required",'', {
      duration: 3000,
      
  });
    return ;
  }

  console.log(this.user);
  if(this.user.userLastName=='' || this.user.userLastName==null ){
    this.snack.open("User lastname is required",'', {
      duration: 3000,
      
  });
    return ;
  }

  console.log(this.user);
  if(this.user.mobileNumber=='' || this.user.mobileNumber==null){
    this.snack.open("mobile number is required",'', {
      duration: 3000,
      
  });
    return ;
  }

  console.log(this.user);
  if(this.user.userPassword=='' || this.user.userPassword==null){
    this.snack.open("User password is required",'', {
      duration: 3000,
      
  });
    return ;
  }

  

this.userService.addUser(this.user).subscribe(
  (data:any)=>{
    console.log(data);
    Swal.fire('Success','Welcome to OnlineAssesmentplatform'+ ''+ data.userName ,'success');

  },
  (error)=>{
    console.log(error);
    
    this.snack.open('something went wrong!!','',{
     duration:3000
    });
  }

  
)
}
}