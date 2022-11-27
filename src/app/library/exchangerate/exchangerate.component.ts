import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyService } from 'src/app/service/currency.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exchangerate',
  templateUrl: './exchangerate.component.html',
  styleUrls: ['./exchangerate.component.css'],
})
export class ExchangerateComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

currencies: any;

  constructor(private curr: CurrencyService, private http: HttpClient) {}

  displayedColumns!: any;
  // dataSource!: MatTableDataSource<Element>;
  dataSource!: any;
  temp!: any;

  editMode=false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  finalCall() {
    this.curr.currencies.length === 0 ? this.curr.getAllData() : console.log();

    setTimeout(() => {
      this.displayedColumns = this.curr.displayedColumns;

      console.log(this.curr.exchange_rate_has);
      // this.dataSource = new MatTableDataSource<Element>(this.curr.rates);
      this.dataSource = this.curr.rates;

    }, 3500);
  }

  alert(value: any) {
    this.temp = value.currencies;
    console.log(value.currencies);
    setTimeout(() => {
      this.temp = undefined;
    }, 50000);
  }

  ngOnInit(): void {
    // let element = this.displayedColumns[this.displayedColumns.findIndex(item => item === "currencies")]

    // this.displayedColumns.splice(this.displayedColumns.findIndex(item => item === "currencies"), 1)

    // this.displayedColumns.splice(0, 0, element)
    this.finalCall();
  }
}
