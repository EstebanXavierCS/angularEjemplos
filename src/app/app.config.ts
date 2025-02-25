import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Configura las rutas aquí
  ]
};