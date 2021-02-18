import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IMachine } from './imachine';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit  {
  errMessage='';
  machines: IMachine[]=[];
  constructor(private apiService: ApiService){}

  displayedColumns = ["id", "name", "edit"];

  ngOnInit(): void{
    this.apiService.getAllMachines().subscribe({
      next: machines=>{
        this.machines= machines;
      },
      error: err=> this.errMessage=err
    });
  };

}





