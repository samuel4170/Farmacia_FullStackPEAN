import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

const baseUrl = 'http://localhost:8080/api/proveedor';



@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(baseUrl);
  }

  get(id: any): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${baseUrl}?nombre=${title}`);
    // aca se coloca que queremos filtrar
  }
}