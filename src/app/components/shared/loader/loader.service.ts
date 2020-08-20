import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderCounter = 0;
  showLoader$ = new BehaviorSubject(false);

  set showLoader(value: boolean) {
    value ? this.loaderCounter++ : this.loaderCounter--;
    this.loaderCounter > 0
      ? this.showLoader$.next(true)
      : this.showLoader$.next(false);
  }
}
