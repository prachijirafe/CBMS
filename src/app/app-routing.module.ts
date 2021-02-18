import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { ChannelConfigurationComponent } from './modules/channel-configuration/channel-configuration.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { MachineComponent } from './modules/machine/machine.component';
import { SensorComponent } from './modules/sensor/sensor.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'machine',
        component: MachineComponent,
      },
      {
        path: 'sensor',
        component: SensorComponent,
      },
      {
        path: 'channelconfiguration',
        component: ChannelConfigurationComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
