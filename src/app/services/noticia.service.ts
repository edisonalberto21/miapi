import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticia:Noticias = new Noticias();
  constructor(public http:HttpClient) { }

  leerTodosLosUsuarios(): Observable<Noticias[]>
  {
    return this.http.get<Noticias[]>('https://peliculasapi20201017052851.azurewebsites.net/api/actores')
  }
}
