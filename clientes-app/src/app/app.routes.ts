import { Routes } from '@angular/router';
import { ClientesLista } from './clientes-lista/clientes-lista';
import { Cuentas } from './cuentas/cuentas';

import { Movimientos } from './movimientos/movimientos';
import { TransaccionesComponent } from './transacciones/transacciones';

export const routes: Routes = [
	{ path: '', redirectTo: 'clientes', pathMatch: 'full' },
	{ path: 'clientes', component: ClientesLista },
	{ path: 'cuentas', component: Cuentas },
	{ path: 'movimientos', component: Movimientos }
  ,{ path: 'transacciones', component: TransaccionesComponent }
];
