import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})

//Servico que ajuda a enviar feedbacks ao usuario
export class AlertService {
    constructor(
        private readonly alertController: AlertController,
    ) { }

    public async showAlert(header: string, text: string): Promise<void> {
        const alert = await this.alertController.create({
            header: header,
            buttons: [{
              text: text,
              handler: () => { console.log(text) }
            }]
          });
          alert.present();
    };
}