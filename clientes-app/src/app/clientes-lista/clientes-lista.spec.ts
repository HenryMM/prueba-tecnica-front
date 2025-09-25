import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesLista } from './clientes-lista';

describe('ClientesLista', () => {
  let component: ClientesLista;
  let fixture: ComponentFixture<ClientesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
