import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReuniaoMasterPageRoutingModule } from './reuniao-master-routing.module';

import { ReuniaoMasterPage } from './reuniao-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReuniaoMasterPageRoutingModule
  ],
  declarations: [ReuniaoMasterPage]
})
export class ReuniaoMasterPageModule {}
