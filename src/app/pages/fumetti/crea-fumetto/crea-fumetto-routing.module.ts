import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaFumettoPage } from './crea-fumetto.page';

const routes: Routes = [
  {
    path: '',
    component: CreaFumettoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaFumettoPageRoutingModule {}
