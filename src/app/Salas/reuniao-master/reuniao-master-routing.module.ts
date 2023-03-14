import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReuniaoMasterPage } from './reuniao-master.page';

const routes: Routes = [
  {
    path: '',
    component: ReuniaoMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuniaoMasterPageRoutingModule {}
