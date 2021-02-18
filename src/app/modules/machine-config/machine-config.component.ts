import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MachineConfig } from './machine-config';

@Component({
  selector: 'app-machine-config',
  templateUrl: './machine-config.component.html',
  styleUrls: ['./machine-config.component.css'],
})
export class MachineConfigComponent implements OnInit {
  machineConfigForm!: FormGroup;
  machineConfig = new MachineConfig();
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.machineConfigForm = this.fb.group({
      machine_name: ['', [Validators.required, Validators.minLength(3)]],
      input_min: ['',[Validators.required]],
      input_max: ['', [Validators.required]],
      output_min: ['',[Validators.required]],
      output_max: ['',[Validators.required]],
      save: true
    });
  }
  save() {
    console.log(this.machineConfigForm);
    console.log('Saved:' + JSON.stringify(this.machineConfigForm.value));
  }

  saveMachine(){
    console.log("data stored")
  }
}
