import { Routes } from '@angular/router';
import { GenderComponent } from './gender/gender.component';
import { TwentyoneComponent } from './twentyone/twentyone.component';
import { TwentytwoComponent } from './twentytwo/twentytwo.component';
import { TwentythreComponent } from './twentythre/twentythre.component';
import { TwentyfourComponent } from './twentyfour/twentyfour.component';
import { TwentyfiveComponent } from './twentyfive/twentyfive.component';

export const routes: Routes = [

    {path: 'gender', component: GenderComponent},
    {path: '2021', component: TwentyoneComponent},
    {path: '2022', component: TwentytwoComponent},
    {path: '2023', component: TwentythreComponent},
    {path: '2024', component: TwentyfourComponent},
    {path: '2025', component: TwentyfiveComponent},

];
