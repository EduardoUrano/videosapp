import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController, private toastController: ToastController) {}

  async exibirDeletarSala() {
    const alert = await this.alertController.create({
      header: 'Deletar Sala?',
      message: "A sala será deletada.",
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
          }
        }
      ]
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
        handler: () => { this.handlerMessage = 'Dismiss clicked'; }
      }
    ]
  });

  await toast.present();

  const { role } = await toast.onDidDismiss();
  this.roleMessage = `Dismissed with role: ${role}`;
}
}



