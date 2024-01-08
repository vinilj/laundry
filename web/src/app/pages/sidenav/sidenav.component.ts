import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/common/apilayer/APIs/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

export interface DialogData {
  password: string;
  userName: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  user: any;

  password:string;
  userName:string = this.cookie.get('loggedUser');

  constructor(private router: Router, private cookie: CookieService, private userApiService: UserService, public dialog: MatDialog, private toast: ToastrService) { }

  ngOnInit() {
    this.userApiService.getCurrentUserData()
      .subscribe(res => {
        this.userApiService.getUserDataById(res.id)
          .subscribe(res => {
            this.cookie.set('userType', res.userType)
            this.cookie.set('franchiseId', res.franchiseId)
            this.cookie.set('loggedUser', res.firstName)
            this.user = res;
          })
      })
  }
  
  logOut() {
    this.cookie.deleteAll();
    this.toast.success('Logged Out', '', {});
    this.cookie.set('Auth-Token', "")
    this.router.navigateByUrl('login')
  }

  updatePassword(): void {
    const dialogRef = this.dialog.open(updatepassword, {
      width: '300px',
      height: "230px",
      data: {password: this.password, userName: this.userName}
    });
    dialogRef.afterClosed().subscribe(result => {
      let updateData:any = {}
      updateData.password = result;
      updateData.id = this.user.id;
      if(result){
      this.userApiService.updateUserPassword(updateData)
      .subscribe(res => {
        this.toast.success('Updated Password', '', {});
      })
    }
    else{
      this.toast.error('Enter password', '', {});
    }
    });
  }

}

@Component({
  selector: 'updatepassword',
  templateUrl: './updatepassword.html'
})
export class updatepassword {

  constructor(
    public dialogRef: MatDialogRef<updatepassword>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
