import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosSalasPage } from './dados-salas.page';

const routes: Routes = [
  {
    path: '',
    component: DadosSalasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosSalasPageRoutingModule {}
