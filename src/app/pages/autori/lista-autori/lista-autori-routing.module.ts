import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaAutoriPage } from './lista-autori.page';

const routes: Routes = [
  {
    path: '',
    component: ListaAutoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaAutoriPageRoutingModule {}
