import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreaUtentePage } from './crea-utente.page';

const routes: Routes = [
  {
    path: '',
    component: CreaUtentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreaUtentePageRoutingModule {}
