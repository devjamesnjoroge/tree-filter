import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  // rates = exchange_rate_table

  displayedColumns!:any
  rates:any =[]
  

  currencies: any[] = []

  exchange_rate: any = []

  exchange_rate_has: any = []
  
  exchange_rate_table: any  = []

  constructor(private http: HttpClient){}

  getCurrencies() : Observable<any>{
      const currObservable = this.http.get("http://127.0.0.1:8000/api/currency_repositories/").pipe(shareReplay())
      currObservable.subscribe(
        (data: any) => {
                  for (var i=0; i<data.length; i++)  
                    this.currencies.push(<Response>data[i]);
                })

      return currObservable
    }

  getExchangeLibrary() : Observable<any>{
      const currObservable = this.http.get("http://127.0.0.1:8000/api/exchange_rate_libraries/").pipe(shareReplay())
      currObservable.subscribe(
        (data: any) => {
                  for (var i=0; i<data.length; i++)  
                    this.exchange_rate.push(<Response>data[i]);
                })

      return currObservable
    }

    getAllData(){
      let currencies = this.getCurrencies()
      let libraries = this.getExchangeLibrary()

      forkJoin([currencies, libraries]).subscribe(_ => {
        this.currencies.forEach((element: any) => {
          this.exchange_rate_has.push(this.exchange_rate.filter((item: any) => (item.currency === element.id)))
        });
        console.log(this.exchange_rate_has)
        this.exchange_rate_has.forEach((element: any) => {
          let first: any ={}
          let obj1: any ={}
          let obj!:any
          element.forEach((item:any)=> {
            console.log(this.currencies[item.currency]?.currency, "ok")
          first['currencies'] = this.currencies[item.currency-1]?.currency
          obj1[item.year] = item.rate
          obj = Object.assign(obj1, first)
        });
        console.log(obj)
        this.rates.push(obj)
      });
  
      const temp : any = []
  
      this.rates.forEach((item: any) => {
        for(const key in item){
          temp.push(key)
        }
      })
  
      this.displayedColumns = Array.from(new Set(temp)).sort().reverse()

      let sock = true;

      })

    }
    
 
}
