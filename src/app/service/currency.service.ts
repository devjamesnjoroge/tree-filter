import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // rates = exchange_rate_table

  displayedColumns!: any;
  rates: any = [];

  currencies: any[] = [];

  exchange_rate: any = [];

  exchange_rate_has: any = [];

  exchange_rate_table: any = [];

  libraryNames: string[] = ['Default', 'Normal'];

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<any> {
    const currObservable = this.http
      .get('http://127.0.0.1:8000/api/currencyrepository/')
      .pipe(shareReplay());
    currObservable.subscribe((data: any) => {
      for (var i = 0; i < data.length; i++) {
        this.currencies.push(<Response>data[i]);
      }
    });

    return currObservable;
  }

  getExchangeLibrary(): Observable<any> {
    const currObservable = this.http
      .get('http://127.0.0.1:8000/api/exchangeratelibrary/')
      .pipe(shareReplay());
    currObservable.subscribe((data: any) => {
      for (var i = 0; i < data.length; i++)
        this.exchange_rate.push(<Response>data[i]);
    });

    return currObservable;
  }

  getAllData() {
    let currencies = this.getCurrencies();
    // displaying the observable by subscring to it
    // currencies.subscribe((e) => {
    //   console.log(e);
    // });
    let libraries = this.getExchangeLibrary();
    // displaying the observable by subscring to it
    // currencies.subscribe((e) => {
    //   console.log(e);
    // });

    forkJoin([currencies, libraries]).subscribe((_) => {
      console.log('this runs');
      this.libraryNames.forEach((name: string) => {
        this.exchange_rate.forEach((item: any) => {
          if (item.ExchangeRateLibraryName === name) {
            this.exchange_rate_has.push(item);
          }
        });
      });

      console.log(this.exchange_rate_has);

      // GET the set of common years or unique years from this.exchange_rate_has

    let year:any[] = []
    this.exchange_rate_has.forEach((item: any) => {
      if (!year.includes(item.Year)) {
        year.push(item.Year);
      }
    });

    

    // Do math floor this.exchange_rate_has/year

    let column = Math.floor(this.exchange_rate_has.length/this.currencies.length)

    // Create a new array with an object with currency as key to currencyName and year as key to ExchangeRateConversionValue

    let exchange_rate_table:any[] = []

    this.currencies.forEach((item: any) => {
      console.log(item)
      let obj:any = {}  
      obj['currency'] = item.CurrencyName
      // Loop through years
      year.forEach((year: any) => {
        this.exchange_rate_has.forEach((item2: any) => {
          console.log(item2)
          if(item2.CurrencyName === item.CurrencyName && item2.Year === year){
            obj[item2.Year] = item2.ExchangeRateConversionValue
          }
        });
      });
     this.rates.push(obj)
    });


    console.log(this.rates)


      // this.currencies.forEach((element: any) => {

      //   // this.exchange_rate.forEach((item: any) => {
      //   //   if (item.id === element.id) {
      //   //     this.exchange_rate_has.push(item);
      //   //   }
      //   // });
      //   // this.exchange_rate_has.push(
      //   //   // this.exchange_rate.filter((item: any) => item.currency === element.id)
      //   // );
      // });
      // console.log(this.exchange_rate_has);
      // console.log(this.exchange_rate)

      // this.exchange_rate_has.forEach((element: any) => {
      //   let first: any = {};
      //   let obj1: any = {};
      //   let obj!: any;
      //   element.forEach((item: any) => {
      //     console.log(this.currencies[item.currency]?.currency, 'ok');
      //     first['currencies'] = this.currencies[item.currency - 1]?.currency;
      //     obj1[item.year] = item.rate;
      //     obj = Object.assign(obj1, first);
      //   });
      //   console.log(obj);
      //   this.rates.push(obj);
      // });

      const temp: any = [];

      this.rates.forEach((item: any) => {
        for (const key in item) {
          temp.push(key);
        }
      });

      this.displayedColumns = Array.from(new Set(temp)).sort().reverse();

      // let sock = true;
    });
  }
}
