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
  {
    path: 'slotcheck',
    loadChildren: () => import('./slotcheck/slotcheck.module').then( m => m.SlotcheckPageModule)
  },
  {
    path: 'slotbook',
    loadChildren: () => import('./slotbook/slotbook.module').then( m => m.SlotbookPageModule)
  },
  {
    path: 'bookresult',
    loadChildren: () => import('./bookresult/bookresult.module').then( m => m.BookresultPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
