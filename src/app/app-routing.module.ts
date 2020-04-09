import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'starter', pathMatch: 'full' },
    {
        path: 'chat-bot',
        loadChildren: () =>
            import('./chat-bot/chat-bot.module').then(m => m.ChatBotPageModule),
    },
    {
        path: 'updates',
        loadChildren: () =>
            import('./updates/updates.module').then(m => m.UpdatesPageModule),
    },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then( m => m.StarterPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
