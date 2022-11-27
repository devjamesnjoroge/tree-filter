import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  public industries!: any;

 // Get industries from Industry api endpoint

  getIndustries(): any {
    this.http.get('http://127.0.0.1:8000/api/industry/').subscribe((data: any) => {
      for (var i = 0; i < data.length; i++) {
        this.industries.push(data[i]);
      }
    });
    
  console.log(this.industries)

    return this.industries;
    
  }

  
  public segments = [
    {id: 1, segment_name: "m-banking", parentId: 1},
    {id: 2, segment_name: "Heart run", parentId: 2},
  ] 

  constructor(private http: HttpClient) { }
}
