import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFumettiPage } from './lista-fumetti.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFumettiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFumettiPageRoutingModule {}
