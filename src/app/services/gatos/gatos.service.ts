import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gatos } from 'src/app/tab1/interfaces/gatos.interface';

@Injectable({
  providedIn: 'root'
})
export class GatosService {

  URL:any = 'https://api.thecatapi.com/v1/breeds';
  httpOption = {}

  constructor(private http: HttpClient) { }

  setearCabeceras(){
    this.httpOption = {
      headers: new HttpHeaders({
        'x-api-key':'bda53789-d59e-46cd-9bc4-2936630fde39'
      })
    }
  }

  obtenerListadoGatos():Observable<Gatos[]>{
    this.setearCabeceras()
    return this.http.get<Gatos[]>(`${this.URL}`,this.httpOption)
  }

}
