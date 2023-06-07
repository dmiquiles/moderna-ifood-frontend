import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesReadComponent } from './components/clientes-read/clientes-read.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesReadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
