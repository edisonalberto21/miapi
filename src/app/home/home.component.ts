import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from '../models/actor';
import { Noticias } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias: Array<Noticias> = new Array<Noticias>();
  actores:Array<Actor> = new Array<Actor>();
  
  constructor(private ArticuloInyectado: NoticiaService) { }

  ngOnInit(): void {
   
    this.ArticuloInyectado.leerTodosLosUsuarios().subscribe((usuarioRecibidos)=>{
      this.noticias = usuarioRecibidos
      
      
    })


  this.ArticuloInyectado.leer().subscribe((apirecicbida)=>{
    console.log(apirecicbida)
  })

  this.ArticuloInyectado.borrarArticulo().subscribe((datos)=>{
      
    console.log(datos)
    console.log('Registro Borrado')
  })
  }

  borrar(){
    this.ArticuloInyectado.borrarArticulo().subscribe((datos)=>{
      
      console.log(datos)
    })
   
  }

 borrar1(){
   this.ArticuloInyectado.deletePost()
 }


}
