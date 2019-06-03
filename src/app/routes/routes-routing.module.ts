import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataformComponent } from './dataform/dataform.component';
import { GraphicalformComponent } from './graphicalform/graphicalform.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {NzIconModule, NzMenuModule, NzRadioModule, NzTableModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ViserModule} from 'viser-ng';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {path: '',  redirectTo: '/dataform', pathMatch: 'full' },
      {path: 'dataform',  component: DataformComponent },
      {path: 'graphicalform',  component: GraphicalformComponent },
    ]
  }
];

@NgModule({
  declarations: [ DataformComponent, GraphicalformComponent, SidenavComponent ],
  imports: [
    RouterModule.forRoot(routes),
    NzIconModule,
    CommonModule,
    NzMenuModule,
    NzTableModule,
    NzRadioModule,
    FormsModule,
    ViserModule
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
