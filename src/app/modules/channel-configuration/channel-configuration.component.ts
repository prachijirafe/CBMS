import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-channel-configuration',
  templateUrl: './channel-configuration.component.html',
  styleUrls: ['./channel-configuration.component.css']
})
export class ChannelConfigurationComponent  {

  displayedColumns = ["position", "channelName", "machine", "sensor"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


}
export interface Element {
  machine: string;
  position: number;
  channelName: string;
  sensor: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, channelName: "Channel 'A'", machine: "Machine 1", sensor:"temperature" },
  { position: 2, channelName: "Channel 'B'", machine: "Machine 2", sensor:"temperature" },
  { position: 3, channelName: "Channel 'C'", machine: "Machine 4", sensor:"temperature" },
  { position: 4, channelName: "Channel 'D'", machine: "Machine 5", sensor:"temperature" },
  { position: 5, channelName: "Channel 'E'", machine: "Machine 1", sensor:"temperature" },
  { position: 6, channelName: "Channel 'F'", machine: "Machine 1", sensor:"temperature" },
  { position: 7, channelName: "Channel 'G'", machine: "Machine 1", sensor:"temperature" },
  { position: 8, channelName: "Channel 'H'", machine: "Machine 1", sensor:"temperature" },
];
