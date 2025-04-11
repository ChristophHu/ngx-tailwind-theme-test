import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTailwindThemeTestComponent } from './ngx-tailwind-theme-test.component';

describe('NgxTailwindThemeTestComponent', () => {
  let component: NgxTailwindThemeTestComponent;
  let fixture: ComponentFixture<NgxTailwindThemeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTailwindThemeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTailwindThemeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
