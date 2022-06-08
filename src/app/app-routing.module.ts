import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  // {
  //   path: 'lista-autori',
  //   loadChildren: () => import('./pages/autori/lista-autori/lista-autori.module').then( m => m.ListaAutoriPageModule)
  // },
  // {
  //   path: 'crea-autori',
  //   loadChildren: () => import('./pages/autori/crea-autori/crea-autori.module').then( m => m.CreaAutoriPageModule)
  // },
  {
    path: 'crea-categoria',
    loadChildren: () => import('./pages/categorie/crea-categoria/crea-categoria.module').then( m => m.CreaCategoriaPageModule)
  },
  {
    path: 'lista-categorie',
    loadChildren: () => import('./pages/categorie/lista-categorie/lista-categorie.module').then( m => m.ListaCategoriePageModule)
  },
  {
    path: 'crea-fumetto',
    loadChildren: () => import('./pages/fumetti/crea-fumetto/crea-fumetto.module').then( m => m.CreaFumettoPageModule)
  },
  {
    path: 'lista-fumetti',
    loadChildren: () => import('./pages/fumetti/lista-fumetti/lista-fumetti.module').then( m => m.ListaFumettiPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}