import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly router: Router,
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((route: NavigationEnd) => {
      
      if (!this.routesWithoutNavbar.includes(route.url)) {
        this.canShowNavbar = true;
      } else {
        this.canShowNavbar = false;
      }

      // if(route.url !== '/login') this.canShowNavbar = true;
    })
  }

  public routesWithoutNavbar: string[] = ['/login'];
  public canShowNavbar: boolean = false;
}
