import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  public industries = [
    {id: 1, industry_name: "telecom"},
    {id: 2, industry_name: "health"},
  ]

  public segments = [
    {id: 1, segment_name: "m-banking", parentId: 1},
    {id: 2, segment_name: "Heart run", parentId: 2},
  ] 

  constructor() { }
}
