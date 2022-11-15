import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currencies = [
    {id: 1, currency:"USD – United States Dollar"},
    {id: 2, currency:"GBP – Great Britain Pound"},
    {id: 3, currency:"CAD – Canadian Dollar"},
    {id: 4, currency:"EUR – Euro"},
    {id: 5, currency:"INR – Indian Rupee"},
    {id: 6, currency:"SGD – Singapore Dollar"},
  ]

  constructor() { }
}
