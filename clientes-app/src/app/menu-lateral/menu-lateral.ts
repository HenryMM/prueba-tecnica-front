import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral.html',
  styleUrls: ['./menu-lateral.css', '../styles-global.css']
})
export class MenuLateral {
  constructor(public router: Router) {}
}
