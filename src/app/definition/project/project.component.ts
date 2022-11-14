import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  data: any[] =[]

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        "Tree view": "Vancouver strike1",
        subtasks: [
          {
          "Tree view": "Industry",
          subtasks: [
            {
            "Tree view": "Transport",
            
            }
          ]
          },
          {
            "Tree view": "Segment",
            subtasks: [
              {
              "Tree view": "Space exploration",
              
              }
            ]
            }
        ]
      },
      {
        "Tree view": "Vancouver strike2",
        subtasks: [
          {
          "Tree view": "Industry",
          subtasks: [
            {
            "Tree view": "Transport",
            
            }
          ]
          },
          {
            "Tree view": "Segment",
            subtasks: [
              {
              "Tree view": "Space exploration",
              
              }
            ]
            }
        ]
      },
      {
        "Tree view": "Vancouver strike3",
        subtasks: [
          {
          "Tree view": "Industry",
          subtasks: [
            {
            "Tree view": "Transport",
            
            }
          ]
          },
          {
            "Tree view": "Segment",
            subtasks: [
              {
              "Tree view": "Space exploration",
              
              }
            ]
            }
        ]
      }
    ]
  }

}
