import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLateral } from './menu-lateral/menu-lateral';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clientes-app');
}
