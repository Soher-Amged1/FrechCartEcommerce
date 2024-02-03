import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordService } from 'src/app/core/services/forget-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _ForgetPasswordService:ForgetPasswordService,private _Router:Router){}
  step1:boolean =true;
  step2:boolean =false;
  step3:boolean =false;
  email:string=''
  userMsg:string=''


  forgetForm:FormGroup=new FormGroup({
    email:new FormControl('')
  })
  resetCodeForm:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  })
  resetPasswordForm:FormGroup=new FormGroup({
    newPassword:new FormControl('')
  })


  forgetPassword():void{
    let userEmail=this.forgetForm.value;
    this.email=userEmail.email 
    this._ForgetPasswordService.forgetPassword(userEmail).subscribe({
      next:(res)=>{
        this.userMsg=res.status
        this.step1=false
        this.step2=true
      },  error:(err)=>{
        this.userMsg=err.error.message
      }
    })
  }

  resetCode():void{
    let resetCode=this.resetCodeForm.value;
    this._ForgetPasswordService.resetCode(resetCode).subscribe({
      next:(res)=>{
        this.userMsg=res.status
        this.step2=false
        this.step3=true
      },  error:(err)=>{
        this.userMsg=err.error.message
      }
    })
  

  }

  newPassword():void{
    let resetForm=this.resetPasswordForm.value;
    resetForm.email=this.email

    this._ForgetPasswordService.resetPassword(resetForm).subscribe({
      next:(res)=>{
        if(res.token){
          localStorage.setItem('_token',res.token)
          this._Router.navigate(['/home'])
        }
       
        },  error:(err)=>{
        this.userMsg=err.error.message
      }
    })
  }


}
