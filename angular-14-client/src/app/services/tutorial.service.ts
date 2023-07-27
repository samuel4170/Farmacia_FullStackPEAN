import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const base = 'http://localhost:8080/api/empleado';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(base);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${base}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(base, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${base}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${base}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(base);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${base}?nombre=${title}`);
    // aca se coloca que queremos filtrar
  }
}