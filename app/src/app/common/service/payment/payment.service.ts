import { Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { Observable } from 'rxjs';
declare var RazorpayCheckout: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  currencyIcon: string = '₹';
  currency: string = 'INR';
  paymentAmount: number = 1600;

  razor_key: string = 'rzp_test_rRvE0JzWWGkqh1'

  constructor(private toast: ToastService) { }

  ngOnInit() {
  }



  payWithRazor(user) {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: user.amount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Coin Laundry',
      prefill: {
        email: user.email,
        contact: user.contact,
        name: user.name
      },
      theme: {
        color: '#642E58'
        // color: '#00000'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {

      this.toast.toastsucess('Payment Sucessfull')

      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      this.toast.toastsucess('Payment Failed')

      alert(error.description + ' (Error ' + error.code + ')');
    };

    return RazorpayCheckout.open(options, successCallback, cancelCallback)

  }
  re
}
