import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/main/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('./pages/main/feed/feed.module').then((m) => m.FeedPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/main/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'feed/:id',
    loadChildren: () =>
      import('./pages/main/feed-detail/feed-detail.module').then(
        (m) => m.FeedDetailPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
