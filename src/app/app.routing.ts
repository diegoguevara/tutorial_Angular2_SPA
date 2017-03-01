import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {DetalleComponent } from './detalle.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component:  HomeComponent
    },

    {
        path: 'detalle',
        component:  DetalleComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
