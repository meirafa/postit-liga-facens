import { Injectable } from "@angular/core";
import { AlertButton, ToastController, AlertController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})

//Servico que ajuda a enviar feedbacks ao usuario
export class HelperService {
    constructor(
        private readonly alertController: AlertController,
        private readonly toastController: ToastController,
    ) { }

    public async showToast(message: string, duration: number = 2000): Promise<void> {
        const toast = await this.toastController.create({
            message: message,
            duration: duration //2s
        });
        toast.present();
    };

    public async showAlert(header: string, buttons: (AlertButton)[]): Promise<void> {
        const alert = await this.alertController.create({
            header,
            buttons
          });
          alert.present();
    };
}