import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:3000/clientes');
  }

}
