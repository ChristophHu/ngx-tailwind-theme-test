import { Component } from '@angular/core';
// import { NgxTailwindThemeTestComponent } from '../../../ngx-tailwind-theme-test/src/public-api';
import { NgxTailwindThemeTestComponent } from '@christophhu/ngx-tailwind-theme-test';

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
