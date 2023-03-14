import { ISalas } from './../models/ISalas.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dados-salas',
  templateUrl: './dados-salas.page.html',
  styleUrls: ['./dados-salas.page.scss'],
})
export class DadosSalasPage implements OnInit {
  Salas!: ISalas;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
   this.Salas = this.dadosService.pegarDados('Salas');
    console.log('Sala Enviada', this.Salas);
  }

}

