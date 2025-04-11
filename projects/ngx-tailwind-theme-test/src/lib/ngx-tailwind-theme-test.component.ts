import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tailwind-theme-test',
  imports: [],
  template: `
    <p class="text-2xl text-blue-500 font-bold">
      Ngx Tailwind Theme Test Component
    </p>
    <p class="text-lg text-test m-[20px]">
      This is a test component for the Ngx Tailwind Theme library.
    </p>
  `,
  styles: ``
})
export class NgxTailwindThemeTestComponent {

}
