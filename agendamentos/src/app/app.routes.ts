import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MarcarAgendamentoComponent } from './marcar-agendamento/marcar-agendamento.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'marcar-agendamento', component: MarcarAgendamentoComponent },
];
