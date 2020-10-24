import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../models/actor';
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

  leer():Observable<Actor[]>
  {
    return this.http.get<Actor[]>('https://localhost:44347/api/actores')
  }

  borrarArticulo():Observable<any>
  {
    
    return  this.http.delete<any>('https://localhost:44347/api/actores/3')  
  }

  deletePost() {
    debugger
    this.http.delete('https://localhost:44347/api/actores/2').subscribe(data => {
      console.log(data);
    
    });
  }
}
