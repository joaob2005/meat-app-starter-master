import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AbautComponent} from './abaut/abaut.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'


export const ROUTES: Routes =[
    {path: '', component:HomeComponent},
    {path: 'about',component:AbautComponent},
    {path: 'restaurants',component:RestaurantsComponent}
]