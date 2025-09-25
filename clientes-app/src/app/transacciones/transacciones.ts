import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './transacciones.html',
  styleUrls: ['./transacciones.css']
})
export class TransaccionesComponent {
  opcionSeleccionada: string | null = null;
  mostrarModalDeposito = false;
  cuenta: string = '';
  monto: number | null = null;
  mensajeDeposito: string = '';

  mostrarModalRetiro = false;
  cuentaRetiro: string = '';
  montoRetiro: number | null = null;
  mensajeRetiro: string = '';

  constructor(private http: HttpClient) {}

  seleccionarOpcion(opcion: string) {
    this.opcionSeleccionada = opcion;
    if (opcion === 'deposito') {
      this.abrirModalDeposito();
    } else if (opcion === 'retiro') {
      this.abrirModalRetiro();
    }
  }

  abrirModalDeposito() {
    this.mostrarModalDeposito = true;
    this.mensajeDeposito = '';
  }

  cerrarModalDeposito() {
    this.mostrarModalDeposito = false;
    this.cuenta = '';
    this.monto = null;
    this.mensajeDeposito = '';
  }

  onDepositar() {
    const body = {
      monto: this.monto?.toString() ?? '',
      cuenta: this.cuenta,
      codigoTransaccion: '0'
    };
    this.http.post<any>('http://localhost:8083/transacciones/deposito', body)
      .subscribe({
        next: (resp) => {
          this.mensajeDeposito = resp?.Mensaje || 'Deposito realizado satisfactoriamente';
        },
        error: (err) => {
          this.mensajeDeposito = 'Error al realizar el depósito';
        }
      });
  }

  onCancelar() {
    this.cerrarModalDeposito();
  }

  abrirModalRetiro() {
    this.mostrarModalRetiro = true;
    this.mensajeRetiro = '';
  }

  cerrarModalRetiro() {
    this.mostrarModalRetiro = false;
    this.cuentaRetiro = '';
    this.montoRetiro = null;
    this.mensajeRetiro = '';
  }

  onRetirar() {
    const body = {
      monto: this.montoRetiro?.toString() ?? '',
      cuenta: this.cuentaRetiro,
      codigoTransaccion: '0'
    };
    this.http.post<any>('http://localhost:8083/transacciones/retiro', body)
      .subscribe({
        next: (resp) => {
          this.mensajeRetiro = resp?.Mensaje || 'Retiro realizado satisfactoriamente';
        },
        error: (err) => {
          this.mensajeRetiro = 'Error al realizar el retiro';
        }
      });
  }

  onCancelarRetiro() {
    this.cerrarModalRetiro();
  }
}
