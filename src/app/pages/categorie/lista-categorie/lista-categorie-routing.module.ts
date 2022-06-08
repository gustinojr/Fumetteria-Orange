import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCategoriePage } from './lista-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCategoriePageRoutingModule {}
