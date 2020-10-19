import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Noticias } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  noticias: Array<Noticias> = new Array<Noticias>();
  
  constructor(private ArticuloInyectado: NoticiaService) { }

  ngOnInit(): void {
   
    this.ArticuloInyectado.leerTodosLosUsuarios().subscribe((usuarioRecibidos)=>{
      this.noticias = usuarioRecibidos
      
      
    })
  }

}
