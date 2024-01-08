import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../apilayer/APIs/userapi.service';
import { LocalStroageService } from '../../service/localstorage/local-stroage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.scss'],
})
export class ProfileheaderComponent implements OnInit {
  user: any;
  totalWalletBalance: number;

  constructor(private userService: UserapiService, private localStorage: LocalStroageService, private navctrl:NavController) {

    localStorage.getStoredKey('user')
      .then(user => {
        console.log(user);

        this.user = user
      })
      this.getUserWalletData()
  }

  ngOnInit() { }

  goToHome(){
    this.navctrl.navigateBack('tabs/tab1')
    }

  getUserWalletData() {
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.totalWalletBalance = 0;
        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
            res.forEach(element => {
              this.totalWalletBalance += element.balance
            });

          })
      })
  }

}
