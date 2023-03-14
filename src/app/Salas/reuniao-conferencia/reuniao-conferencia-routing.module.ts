import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReuniaoConferenciaPage } from './reuniao-conferencia.page';

const routes: Routes = [
  {
    path: '',
    component: ReuniaoConferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReuniaoConferenciaPageRoutingModule {}
