import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './components/shared/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private loaderService: LoaderService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.showLoader = true;
      }
      if (event instanceof NavigationEnd) {
        this.loaderService.showLoader = false;
      }
    });
  }
}
