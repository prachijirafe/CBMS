import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  displayedColumns = ['machine', 'sensor', 'from', 'to'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
export interface Element {
  machine: string;
  sensor: string;

}
const ELEMENT_DATA: Element[] = [
  { machine: 'Machine 1', sensor: 'temperature'},
];
