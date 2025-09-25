import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService, Cliente } from '../clientes/clientes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes-lista.html',
  styleUrls: ['./clientes-lista.css', '../styles-global.css']
})
export class ClientesLista implements OnInit {
  clientes: Cliente[] = [];
  loading = true;
  error = '';
  mostrarFormulario = false;
  mostrarEditar = false;
  formData = {
    contrasena: '',
    nombre: '',
    genero: '',
    edad: '',
    identificacion: '',
    direccion: '',
    telefono: ''
  };
  editarData = {
    contrasena: '',
    estado: '',
    nombre: ''
  };

  constructor(private clientesService: ClientesService, private http: HttpClient) {}

  ngOnInit() {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        this.clientes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los clientes';
        this.loading = false;
      }
    });
  }


  abrirFormulario() {
    this.mostrarFormulario = true;
    this.formData = {
      contrasena: '',
      nombre: '',
      genero: '',
      edad: '',
      identificacion: '',
      direccion: '',
      telefono: ''
    };
  }

  cancelarFormulario() {
    this.mostrarFormulario = false;
  }

  abrirEditar(cliente: Cliente) {
    this.editarData = {
      contrasena: '',
      estado: cliente.estado || '',
      nombre: cliente.nombre || ''
    };
    this.mostrarEditar = true;
  }

  cancelarEditar() {
    this.mostrarEditar = false;
  }

  guardarCliente() {
    const body = {
      "contraseña": this.formData.contrasena,
      "estado": "ACTIVO",
      "persona": {
        "nombre": this.formData.nombre,
        "genero": this.formData.genero,
        "edad": Number(this.formData.edad),
        "identificacion": this.formData.identificacion,
        "direccion": this.formData.direccion,
        "telefono": this.formData.telefono
      }
    };
    this.http.post('http://localhost:8083/clientes', body).subscribe({
      next: () => {
        this.mostrarFormulario = false;
        // Opcional: recargar la lista de clientes
        this.ngOnInit();
      },
      error: () => {
        alert('Error al guardar el cliente');
      }
    });
  }
}
