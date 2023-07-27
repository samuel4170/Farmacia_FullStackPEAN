import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta.model';

const baseUrl = 'http://localhost:8080/api/venta';



@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Venta[]> {
    return this.http.get<Venta[]>(baseUrl);
  }

  get(id: any): Observable<Venta> {
    return this.http.get<Venta>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${baseUrl}?fecha=${title}`);
    // aca se coloca que queremos filtrar
  }
}