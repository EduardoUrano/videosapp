import { DadosService } from './../services/dados.service';
import { ISalas } from './../models/ISalas.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Juliano';
  listasalas: ISalas[] = [
    {
      nome: 'Reunião Master',
      horario: '8:00AM - 17:00PM',
      equipamentos: 'Projetor, microfone e gravação',
      ocupacao: 55,
      foto: 'https://habitatautomacao.com.br/wp-content/uploads/2021/07/thumbs-case10.png',
      pagina: '/reuniao-master',
    },
    {
      nome: 'Reunião Conferência',
      horario: '8:00AM - 17:00PM',
      equipamentos: 'TV, SOM, Video Conferência',
      ocupacao: 42,
      foto: 'https://habitatautomacao.com.br/wp-content/uploads/2021/12/thumbs-destaques08-390x240.jpg',
      pagina: '/reuniao-conferencia',
    },
    {
      nome: 'Auditório',
      horario: '8:00AM - 22:00PM',
      equipamentos: 'Projetor, SOM, 2x Microfones',
      ocupacao: 23,
      foto: 'https://habitatautomacao.com.br/wp-content/uploads/2021/07/thumbs-case08.png',
    },
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) {}

  exibirSala(Salas: ISalas) {
    this.dadosService.guardarDados('Salas', Salas);
    this.route.navigateByUrl('/dados-salas');
  }

  async exibirDeletarSala() {
    const alert = await this.alertController.create({
      header: 'Deletar Sala?',
      message: 'A sala será deletada.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Deletar',

          handler: () => {
            this.deletouToast();
          },
        },
      ],
    });
    await alert.present();
  }

  handlerMessage = '';
  roleMessage = '';
  async deletouToast() {
    const toast = await this.toastController.create({
      message: 'Sala Deletada',
      duration: 3000,
      color: 'danger',
      buttons: [
        {
          text: 'Dispensar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Dismiss clicked';
          },
        },
      ],
    });

    await toast.present();

    const { role } = await toast.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
