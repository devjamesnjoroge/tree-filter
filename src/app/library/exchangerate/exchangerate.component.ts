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

  ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  constructor(private curr: CurrencyService, private http: HttpClient) {}

  displayedColumns!: any;
  // dataSource!: MatTableDataSource<Element>;
  dataSource!: any;
  temp!: any;

  finalCall() {
    this.curr.currencies.length === 0 ? this.curr.getAllData() : console.log();

    setTimeout(() => {
      this.displayedColumns = this.curr.displayedColumns;

      console.log(this.curr.exchange_rate_has);
      // this.dataSource = new MatTableDataSource<Element>(this.curr.rates);
      this.dataSource = this.curr.exchange_rate_has;
      this.dataSource.paginator = this.paginator;

      if (this.dataSource) {
        console.log(this.dataSource.paginator);
      }
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
