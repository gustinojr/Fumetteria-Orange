import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaAutoriPage } from './crea-autori.page';

const routes: Routes = [
  {
    path: '',
    component: CreaAutoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaAutoriPageRoutingModule {}
