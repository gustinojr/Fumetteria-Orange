import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaCategoriaPage } from './crea-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CreaCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaCategoriaPageRoutingModule {}
