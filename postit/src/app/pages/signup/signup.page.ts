import { HelperService } from 'src/app/services/helper.service';
import { SignupPayload } from './../../models/payload/signup.payload';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { RegisterPayload } from 'src/app/models/payload/create-user.pauload';
import { AuthService } from 'src/app/services/auth.service';

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

  public registerPayload: RegisterPayload = {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  };

  public isSigning: boolean;

  constructor(
    private router: Router,
    private readonly helper: HelperService,
    private animationCtrl: AnimationController,
    private readonly auth: AuthService
  ) {}

  //evento disparado depois que o angular carregou todos os componentes da tela
  ngAfterViewInit() {
    this.createAnimation();
  }

  public createAnimation(): void {
    this.animationCtrl
      .create()
      .addElement(this.mainAnimation.nativeElement)
      .duration(500)
      .easing('ease-in-out')
      .fromTo('transform', 'scale(1)', 'translateY(-50px)')
      .fromTo('opacity', '0', '1') //animacao usada, inicio, posicao original
      .play();
  }

  public toRedirect(): void {
    this.router.navigate(['/login']);
  }

  public async signup(): Promise<void> {
    if (!this.canRegister()) {
      return;
    }
    this.isSigning = true;
    const [isSuccess, message] = await this.auth.register(this.registerPayload);
    this.isSigning = false;
    if (isSuccess) {
      return void (await this.router.navigate(['/home']));
    }
    // //alert
    // await this.helper.showAlert(
    //   'Olá ' + this.signupPayload.name + ' seja bem vindo!',
    //   [
    //     {
    //       text: 'entrar',
    //       handler: () => this.router.navigate(['/home']),
    //     },
    //   ]
    // );

    // alert
    await this.helper.showToast(message, 5_000);
  }

  public canRegister(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    if (this.signupPayload.name.trim().length <= 0) {
      return false;
    }
    if (!regex.test(this.signupPayload.email)) {
      return false;
    }
    if (this.signupPayload.email !== this.signupPayload.repeatEmail) {
      return false;
    }

    if (this.signupPayload.password.length < 6) {
      return false;
    }
    if (this.signupPayload.password !== this.signupPayload.repeatPassword) {
      return false;
    }

    return true;
  }
}
