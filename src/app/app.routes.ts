import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AllComponent } from './Components/all/all.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { UpcomingComponent } from './Components/upcoming/upcoming.component';
import { SuvComponent } from './Components/suv/suv.component';
import { EvComponent } from './Components/ev/ev.component';
import { ErrorComponent } from './Components/error/error.component';
import { SearchComponent } from './Components/search/search.component';

export const routes: Routes = [
    {   path: '',
         redirectTo: '/home',
         pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'all',
        component:AllComponent
    },
    {
        path:'wishlist' ,
        component:WishlistComponent
    },
    {
        path: 'upcoming',
        component:UpcomingComponent
    },
    {
        path: 'suv',
        component:SuvComponent
    },
    {
        path: 'ev',
        component:EvComponent
    },
    {
        path: 'search',
        component:SearchComponent
    },
    {
        path: '**',
        component:ErrorComponent
    }
    
];
