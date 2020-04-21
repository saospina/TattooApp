import { Routes, RouterModule } from '@angular/router';
import { TattoosComponent } from './components/tattoos/tattoos.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { TattooComponent } from './components/tattoo/tattoo.component';
import { SearcherComponent } from './components/searcher/searcher.component';



export const ROUTES: Routes = [
    { path: 'home', component: HeaderComponent},
    { path: 'tattoos', component: TattoosComponent},
    { path: 'tattoo/:id', component: TattooComponent},
    { path: 'search/:searchid', component: SearcherComponent},
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
