import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-autori',
    loadChildren: () => import('./pages/lista-autori/lista-autori.module').then( m => m.ListaAutoriPageModule)
  },
{
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'lista-autori',
    loadChildren: () =>
      import('./pages/lista-autori/lista-autori.module').then(
        (m) => m.ListaAutoriPageModule
      ),
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'crea-utente',
    loadChildren: () => import('./pages/utente/crea-utente/crea-utente.module').then( m => m.CreaUtentePageModule)
  },
  {
    path: 'lista-utenti',
    loadChildren: () => import('./pages/utente/lista-utenti/lista-utenti.module').then( m => m.ListaUtentiPageModule)
  },

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
