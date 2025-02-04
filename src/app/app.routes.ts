import { Routes } from '@angular/router';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { HomeComponent } from './components/home/home.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './components/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './components/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './components/ejemplo5/ejemplo5.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';


export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'fundamentos', component: FundamentosComponent },
  {path: 'ejemplo2', component: Ejemplo2Component},
  {path: 'ejemplo3', component: Ejemplo3Component},
  {path: 'ejemplo4', component: Ejemplo4Component},
  {path: 'ejemplo5', component: Ejemplo5Component},
  {path: 'ejercicio', component: EjercicioComponent},
  { path: '**', redirectTo: '' } // Ruta para manejar errores (opcional)
];