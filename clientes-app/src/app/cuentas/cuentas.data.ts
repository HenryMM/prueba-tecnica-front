export interface Cuenta {
  numeroCuenta: string;
  tipo: string;
  saldoInicial: number;
  estado: string;
  nombreCliente: string;
}

export const CUENTAS_DATA: Cuenta[] = [
  {
    numeroCuenta: '1001',
    tipo: 'Ahorros',
    saldoInicial: 1500.00,
    estado: 'Activa',
    nombreCliente: 'Juan Pérez'
  },
  {
    numeroCuenta: '1002',
    tipo: 'Corriente',
    saldoInicial: 2500.50,
    estado: 'Inactiva',
    nombreCliente: 'Ana Gómez'
  },
  {
    numeroCuenta: '1003',
    tipo: 'Ahorros',
    saldoInicial: 500.00,
    estado: 'Activa',
    nombreCliente: 'Carlos Ruiz'
  }
];
