import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  showLoader: boolean;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.showLoader$.subscribe(
      (value) => (this.showLoader = value)
    );
  }
}
