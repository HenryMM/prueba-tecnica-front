import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from './menu-lateral/menu-lateral';
import { TransaccionesComponent } from './transacciones/transacciones';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateral, TransaccionesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clientes-app');
}
