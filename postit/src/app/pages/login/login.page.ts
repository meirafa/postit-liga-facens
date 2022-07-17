import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payload/login.payload'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    this.isLoading = true;
    //toast
    const toast = await this.toastController.create({
      message: 'Logando...',
      duration: 2000 //2s
    });
    toast.present();
    //alert
    const alert = await this.alertController.create({
      header: 'Hello World',
      buttons: [{
        text: 'OK',
        handler: () => { console.log('ok') }
      }]
    });
    alert.present();
    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regexEmail.test(this.loginPayload.email)

    if (emailIsValid && this.loginPayload.password.length >= 6)
      return true;

    return false;
  }

  public logoClick($event: boolean): void{
    console.log($event);
    //console.log('Voce clicou no logo');
  }

}
