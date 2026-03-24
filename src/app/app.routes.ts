import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'anime', pathMatch: 'full' },
    { path: 'anime', loadChildren: () => import('./anime/routes') },

];
