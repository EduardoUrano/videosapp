import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReuniaoConferenciaPageRoutingModule } from './reuniao-conferencia-routing.module';

import { ReuniaoConferenciaPage } from './reuniao-conferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReuniaoConferenciaPageRoutingModule
  ],
  declarations: [ReuniaoConferenciaPage]
})
export class ReuniaoConferenciaPageModule {}
