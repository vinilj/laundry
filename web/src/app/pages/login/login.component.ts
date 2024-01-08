import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from 'src/app/common/apilayer/APIs/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  email: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  loginResp:any;
  forgetResp:any;
  

  loginForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
    ]),
    password:new FormControl('')
  });

  constructor(private userService: UserService, private router: Router, private cookie:CookieService, public dialog: MatDialog, private toast: ToastrService) { }

  ngOnInit() {
    this.cookie.deleteAll()
  }

  login() {
    this.cookie.deleteAll()
    if(this.loginForm.valid){
    this.userService.userLogin({ email: this.email, password: this.password })
      .subscribe(res => {
        this.loginResp = res;
        this.cookie.set('Auth-Token', res['token'])
        this.router.navigateByUrl('sidenav/dashboard')
      })
    }
    else{
      this.toast.error('Enter Credentials', '', {
        positionClass: 'toast-top-right',
      });
    }
  }

  forgetPassword(): void {
    const dialogRef = this.dialog.open(forgetpassword, {
      width: '300px',
      height: "230px",
      data: {email: this.email}
    });
    dialogRef.afterClosed().subscribe(result => {
      let updateData:any = {}
      updateData.email = result;
      if(result){
      this.userService.forgotPassword(updateData)
      .subscribe(res => {
        this.toast.success('sent to Register Email', '', {
          positionClass: 'toast-top-right',
        });
      })
    }else{
      this.toast.error('Enter Email Id', '', {});
    }
    });
  }
}

@Component({
  selector: 'forgetpassword',
  templateUrl: './forgetpassword.html'
})
export class forgetpassword {
  constructor(
    public dialogRef: MatDialogRef<forgetpassword>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
