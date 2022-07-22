import { HelperService } from 'src/app/services/helper.service';
import { SignupPayload } from './../../models/payload/signup.payload';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  public signupPayload: SignupPayload = {
    name: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
  };

  public isLoading: boolean;

  constructor(
    private router: Router,
    private readonly helper: HelperService,
    //private animationCtrl: AnimationController
  ) {
    // const animation: Animation = this.animationCtrl
    //   .create()
    //   .addElement(document.querySelector('.container'))
    //   .duration(2000)
    //   .beforeStyles({
    //     opacity: 0.2,
    //   })
    //   .afterStyles({
    //     background: 'rgba(0, 255, 0, 0.5)',
    //   })
    //   .afterClearStyles(['opacity'])
    //   .keyframes([
    //     { offset: 0, transform: 'scale(1)' },
    //     { offset: 0.5, transform: 'scale(1.5)' },
    //     { offset: 1, transform: 'scale(1)' },
    //   ]);

    // document.querySelector('#play').addEventListener('click', () => {
    //   animation.play();
    // });
  }

  public toRedirect(): void {
    this.router.navigate(['/login']);
  }

  public async login(): Promise<void> {
    if (!this.canLogin()) {
      return;
    }
    this.isLoading = true;

    //alert
    await this.helper.showAlert(
      'Olá ' + this.signupPayload.name + ' seja bem vindo!',
      [
        {
          text: 'entrar',
          handler: () => this.router.navigate(['/home']),
        },
      ]
    );
  }

  public canLogin(): boolean {
    const regexEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    const emailIsValid = regexEmail.test(this.signupPayload.email);

    if (
      emailIsValid &&
      this.signupPayload.password.valueOf ===
        this.signupPayload.repeatPassword.valueOf
    ) {
      return true;
    }
    return false;
  }
}
