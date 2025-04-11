import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxTailwindThemeTestComponent } from '../../../ngx-tailwind-theme-test/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgxTailwindThemeTestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'demo';
}
