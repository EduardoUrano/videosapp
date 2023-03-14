import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosSalasPageRoutingModule } from './dados-salas-routing.module';

import { DadosSalasPage } from './dados-salas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosSalasPageRoutingModule
  ],
  declarations: [DadosSalasPage]
})
export class DadosSalasPageModule {}
