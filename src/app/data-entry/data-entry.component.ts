import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  group:string="";
  artifact:string="";
  name:string="";
  description:string="";
  email:string="";
  package:string="";

public updateData()
{
  this.artifact=this.package.substring(12);
  this.name=this.artifact;
}
}
