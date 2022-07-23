import { HelperService } from 'src/app/services/helper.service';
import { SignupPayload } from './../../models/payload/signup.payload';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements AfterViewInit {
  @ViewChild('mainAnimation') mainAnimation: ElementRef;

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
    private animationCtrl: AnimationController
  ) {}

  //evento disparado depois que o angular carregou todos os componentes da tela
  ngAfterViewInit() {
    this.createAnimation();
  }

  public createAnimation(): void {
    this.animationCtrl
      .create()
      .addElement(this.mainAnimation.nativeElement)
      .duration(1000)
      .easing('ease-in-out')
      .fromTo('transform', 'translateY(70px)', 'translateY(-50px)')
      .fromTo('opacity', '0', '1') //animacao usada, inicio, posicao original
      .play();
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
