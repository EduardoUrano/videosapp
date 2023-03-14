import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'reuniao-master',
    loadChildren: () => import('./Salas/reuniao-master/reuniao-master.module').then( m => m.ReuniaoMasterPageModule)
  },
  {
    path: 'reuniao-conferencia',
    loadChildren: () => import('./Salas/reuniao-conferencia/reuniao-conferencia.module').then( m => m.ReuniaoConferenciaPageModule)
  },
  {
    path: 'dados-salas',
    loadChildren: () => import('./dados-salas/dados-salas.module').then( m => m.DadosSalasPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
