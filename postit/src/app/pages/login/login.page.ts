import { LoginPayload } from 'src/app/models/payload/login.payload';
import { Component } from '@angular/core';

import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  };

  public isLoading: boolean;

  constructor(private readonly helper: HelperService, private readonly router: Router) {}

  public async login(): Promise<void> {
    if (!this.canLogin()) {
      return;
    }
    this.isLoading = true;
    //toast
    await this.helper.showToast('Carregando...');
    //alert
    await this.helper.showAlert('Bem vindo!', [
      {
        text: 'confirmar',
        handler: () => this.router.navigate(['/home']),
      }
    ]);

    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regexEmail.test(this.loginPayload.email);

    if (emailIsValid && this.loginPayload.password.length >= 6) {
      return true;
    }
    return false;
  }

  public logoClick($event: boolean): void {
    console.log($event);
    //console.log('Voce clicou no logo');
  }
}
