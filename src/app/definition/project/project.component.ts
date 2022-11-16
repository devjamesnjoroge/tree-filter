import { Component, OnInit } from '@angular/core';
import { PageSettingsModel, SortSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import { RegionService } from 'src/app/region.service';
import { CurrencyService } from 'src/app/service/currency.service';
import { IndustryService } from 'src/app/service/industry.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  tdStyle!: string;

  constructor(private service: RegionService, private curService: CurrencyService, private indService: IndustryService) { }

  data: any[] =[]

  tdid!: any;

  tdidtwo!: any;

  regions: any[] = this.service.regions

  industries: any[] = this.indService.industries

  constCurrencies : any[] = this.curService.currencies

  selectedCurrencies: any[] = []

  regionSelected: string = "blank";

  industrySelected: string = "blank";

  countrySelected!: string;

  segmentSelected!: string;

  countries: any[] = []

  segments: any[] =[]

  temp!: any;

  print(){
    alert(this.regionSelected)
  }

  public pageSettings!: PageSettingsModel;

  public sortSettings!: SortSettingsModel;

  public filterSettings!: FilterSettingsModel;

  public dataManager!: DataManager;

  handleChange = (e: any) => {
    this.countries = this.service.regions.find((region) => region.region === this.regionSelected).countries
  }

  regionChange(){
    this.countries = this.service.regions.find((region) => region.region === this.regionSelected).countries
    console.log("event")
  }

  industryChange(){
    this.segments = this.indService.segments.filter((item)  => (item.parentId === parseInt(this.industrySelected)))
    console.log(this.industrySelected)
  }

  addSelection(id: any, currency: any){
    this.tdid = id
    this.temp = {id,currency}
    setTimeout(() => {this.tdid = undefined; this.temp = undefined}, 3000)
  }

  removeSelection(id: any, currency: any){
    this.tdidtwo = id
    this.temp = {id,currency}
    setTimeout(() => {this.tdidtwo = undefined; this.temp = undefined}, 3000)
  }


  addCurr(){
    if (this.temp === undefined){
      alert("Make a selection!")
    } else{
      if (this.selectedCurrencies.find((item) => item.id === this.temp.id && item.currency !== null)){
        alert("Currency already selected")
      } else{
        this.selectedCurrencies = this.selectedCurrencies.map((item) => (item.id === this.temp.id ? {...item, ...this.temp} : item ))
        console.log(this.selectedCurrencies)
        this.selectedCurrencies = this.selectedCurrencies.filter((item) => item.id !== this.temp.id)
        this.selectedCurrencies.unshift(this.temp)
      }
    }
  }

  removeCurr(){
    if (this.temp === undefined){
      alert("Make a selection")
    } else if(this.temp.currency === null){
      alert("Make a valid selection")
    } else{
      this.selectedCurrencies = this.selectedCurrencies.map((item) => (item.id === this.temp.id ? {...item, ...{id: item.id, currency: null}} : item ))
      this.selectedCurrencies = this.selectedCurrencies.filter((item) => item.currency !== null)
      this.constCurrencies.forEach((item) => {if (this.selectedCurrencies.find((selected) => selected.id === item.id)){}else{this.selectedCurrencies.push({id:item.id, currency:null})}})
    }
  }

  ngOnInit(): void {
    this.curService.currencies.map((item) => (this.selectedCurrencies.push({id:item.id, currency:null })))

    this.tdStyle = 'td-default'

    this.pageSettings = {pageSize:10}
    this.sortSettings = {
      columns: [{
        field: "treeView", direction: "Descending"
      }]
    }
    this.dataManager = new DataManager({})
    this.data = [
      {nameId: 1,treeView: "Product Name"},
      {nameId: 2,treeView: "Industry", parentId: 1},
      {nameId: 3,treeView: "project"},
    ]
  }

}
