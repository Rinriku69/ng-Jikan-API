import { Routes } from "@angular/router";
import { AnimeRoot } from "./page/anime-root/anime-root";
import { ListAnimePage } from "./page/list-anime-page/list-anime-page";
import { SeasonAnimePage } from "./page/season-anime-page/season-anime-page";



export default [
    {
        path: '',
        providers: [],
        children: [
            {
                path: '',
                component: AnimeRoot,
                children: [
                    { path: 'list', component: ListAnimePage },
                    { path: 'season', component: SeasonAnimePage }
                ]
            }
        ]
    }
] as Routes;