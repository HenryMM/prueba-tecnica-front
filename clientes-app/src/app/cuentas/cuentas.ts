import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Cuenta {
  numeroCuenta: string;
  tipo: string;
  saldoInicial: number;
  estado: string;
  nombreCliente: string;
}

@Component({
  selector: 'app-cuentas',
  imports: [CommonModule, CurrencyPipe, HttpClientModule],
  templateUrl: './cuentas.html',
  styleUrls: ['./cuentas.css', '../styles-global.css']
})
export class Cuentas implements OnInit {
  cuentas: Cuenta[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Cuenta[]>('http://localhost:8083/cuentas').subscribe({
      next: (data) => {
        this.cuentas = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las cuentas';
        this.loading = false;
      }
    });
  }
}
