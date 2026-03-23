import { Routes } from '@angular/router';
import { TopAnimePage } from './anime/page/top-anime-page/top-anime-page';
import { AnimeRoot } from './anime/page/anime-root/anime-root';
import { ListAnimePage } from './anime/page/list-anime-page/list-anime-page';

export const routes: Routes = [
    { path: '', redirectTo: 'list-anime', pathMatch: 'full' },
    { path: 'list-anime', component: ListAnimePage },
    { path: 'top-anime', component: TopAnimePage },
    { path: 'anime-root', component: AnimeRoot },
];
