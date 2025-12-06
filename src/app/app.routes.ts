import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent), title: ' 😊 Home' },
    { path: 'about', loadComponent: () => import('./components/about/about.component').then(c => c.AboutComponent), title: 'About' },
    { path: 'gallery', loadComponent: () => import('./components/gallery/gallery.component').then(c => c.GalleryComponent), title: 'gallery' },
    { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent), title: 'contact' },
    { path: '**', loadComponent: () => import('./components/not-founded/not-founded.component').then(c => c.NotFoundedComponent), title: 'Not Founded' }
];
