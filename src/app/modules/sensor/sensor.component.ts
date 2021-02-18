import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent  {

  displayedColumns = ["position", "sensorName", "unit", "scalingMin", "scalingMax", "edit"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}

export interface Element {
  sensorName: string;
  position: number;
  unit:string;
  scalingMin: number;
  scalingMax: number;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, sensorName: "Temperature", unit:"degree", scalingMin:1.5, scalingMax:4.7 },

];
