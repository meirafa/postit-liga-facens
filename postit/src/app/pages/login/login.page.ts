import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from 'src/app/models/payload/login.payload'
import { AlertService } from 'src/app/services/alert.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helper: HelperService,
    private readonly alert: AlertService,) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    this.isLoading = true;
    //toast
    await this.helper.showToast('Carregando...');
    //alert
    await this.alert.showAlert('Hello World', 'OK');
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
