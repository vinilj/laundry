import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-oderdetail',
  templateUrl: './oderdetail.component.html',
  styleUrls: ['./oderdetail.component.scss']
})
export class OderdetailComponent implements OnInit {
  displayedColumns: string[] = ['select', 'date', 'name', 'mobile', 'email', 'status', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface table {
  select: boolean;
  date: string;
  name: string;
  mobile: string;
  email: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: table[] = [
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'pending', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'pending', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'pending', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'pending', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'failed', action: 'resent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'failed', action: 'resent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'failed', action: 'resent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
  { select: false, date: '29-01-2020', name: 'Adityawikram', mobile: '9092910909', email: 'Adityawikram@gmail.com', status: 'sent', action: 'sent' },
];