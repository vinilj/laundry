import { Component, OnInit } from '@angular/core';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { SpinnerService } from '../../common/service/spinner/spinner.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  totalWalletBalance: number;
  wallet: any[] = [];

  constructor(private userService: UserapiService, private spinnerService: SpinnerService) { }

  ngOnInit() {
    // this.getUserWalletData()
  }
  ionViewWillEnter(){
    this.spinnerService.spinnerPresent();
    this.getUserWalletData();
    this.spinnerService.spinnerDismiss();
  }

  getUserWalletData() {
    this.userService.getUserIdFromStorage()
      .then(() => {
        this.totalWalletBalance = 0;
        this.userService.getUserWallet()
          .subscribe(res => {
            console.log(res, 'wallet');
            this.totalWalletBalance += res[0].balance
          })
        this.userService.getWalletHistory()
          .subscribe(res => {
            console.log(res, 'wallet');
            this.wallet = res.reverse()
          })
      })
  }
}
