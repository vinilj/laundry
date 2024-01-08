import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropprogress',
  templateUrl: './dropprogress.component.html',
  styleUrls: ['./dropprogress.component.scss'],
})
export class DropProgressComponent implements OnInit {
  @Input()
  data: any;

  currentStatus: any = 0

  constructor() { }

  ngOnInit() {
    console.log(OrderStatus[this.data]);
    this.currentStatus = OrderStatus[this.data]
    // this.updateColor()
  }
  getColor(id) {  
    // console.log(id);
    return this.currentStatus >= id ? '#10dc60' : '#C4C4C4';  
  }  
  getBlackColor(id) {  
    // console.log(id);
    return this.currentStatus >= id ? '#000000' : '#C4C4C4';  
  }  

  // <ion-button class="primary-border" (click)="updateOrderStatus('order received')">Order Received</ion-button>
  // <ion-button class="primary-border" (click)="updateOrderStatus('wash completed')">Wash completed</ion-button>
  // <ion-button class="primary-border" (click)="updateOrderStatus('wash intiated')">Wash Intiated</ion-button>
  // <ion-button class="primary-border" (click)="updateOrderStatus('packed')">Packed to deliver</ion-button>
  // <ion-button class="primary-border" (click)="updateOrderStatus('inpogress')">In Progress</ion-button>
  // <ion-button class="primary-border" (click)="updateOrderStatus('delivered')">Deliver</ion-button>
  updateColor() {
    console.log('updatecalled');

    if (this.currentStatus > 0) {
      document.getElementById('1').style.fill = "#10dc60"
      document.getElementById('2').style.fill = "#000000"
    }
    if (this.currentStatus > 1) {
      document.getElementById('3').style.fill = "#10dc60"
      document.getElementById('4').style.fill = "#000000"
    }
    if (this.currentStatus > 2) {
      document.getElementById('5').style.fill = "#10dc60"
      document.getElementById('6').style.fill = "#000000"
    }
    if (this.currentStatus > 3) {
      document.getElementById('7').style.fill = "#10dc60"
      document.getElementById('8').style.fill = "#000000"
    }
    if (this.currentStatus == 6) {
      document.getElementById('9').style.fill = "#10dc60"
      document.getElementById('10').style.fill = "#000000"
    }

  }

}
enum OrderStatus {
  'order received' = 1,
  'wash intiated',
  'inpogress',
  'wash completed',
  'packed',
  'delivered'
}
