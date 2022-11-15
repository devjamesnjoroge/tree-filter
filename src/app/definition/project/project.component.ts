import { Component, OnInit } from '@angular/core';
import { PageSettingsModel, SortSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-treegrid';
import {DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import { RegionService } from 'src/app/region.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private service: RegionService) { }

  data: any[] =[]

  regions: any[] = this.service.regions

  regionSelected: string = "blank";

  countrySelected!: string;

  countries: any[] = []

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

  ngOnInit(): void {

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
