import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  public regions: any[] = [
    {region: "", countries: []},
    {region: "NA", countries: ["United States", "Canada"]},
    {region: "SA", countries: ["Brazil", "Argentina", "Guatemala", "Jamaica", "cuba"]},
    {region: "Africa", countries: ["Kenya", "Nigeria", "Senegal", "Ethiopia", "Morocco"]},
    {region: "Asia", countries: ["India", "China", "Singapore", "Phillipines", "Qatar"]},
    {region: "Europe", countries: ["London", "France", "Germany", "Poland", "Greece"]},
  ]

  constructor() { }

}
