import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Movimiento {
  fecha: string;
  nombreCliente: string;
  numeroCuenta: string;
  tipoCuenta: string;
  saldoInicial: number;
  estado: string;
  movimiento: number;
  saldoDisponible: number;
}

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, HttpClientModule],
  templateUrl: './movimientos.html',
  styleUrls: ['./movimientos.css', '../styles-global.css']
})
export class Movimientos implements OnInit {
  movimientos: Movimiento[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Movimiento[]>('http://localhost:8083/movimientos').subscribe({
      next: (data) => {
        this.movimientos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los movimientos';
        this.loading = false;
      }
    });
  }

  async descargarPDF() {
    // @ts-ignore: No type definitions for jspdf
    const [{ default: jsPDF },
      // @ts-ignore: No type definitions for jspdf-autotable
      autoTable] = await Promise.all([
      import('jspdf'),
      import('jspdf-autotable').then(m => m.default || m)
    ]);
    const doc = new jsPDF();
    const head = [[
      'Fecha', 'Nombre Cliente', 'Número Cuenta', 'Tipo Cuenta', 'Saldo Inicial', 'Estado', 'Movimiento', 'Saldo Disponible']
    ];
    const body = this.movimientos.map(mov => [
      new Date(mov.fecha).toLocaleString(),
      mov.nombreCliente,
      mov.numeroCuenta,
      mov.tipoCuenta,
      mov.saldoInicial.toFixed(2),
      mov.estado,
      mov.movimiento.toFixed(2),
      mov.saldoDisponible.toFixed(2)
    ]);
    autoTable(doc, {
      head,
      body,
      styles: { fontSize: 9 },
      headStyles: { fillColor: [165, 180, 252] },
      margin: { top: 18 }
    });
    doc.save('reporte-movimientos.pdf');
  }
}
