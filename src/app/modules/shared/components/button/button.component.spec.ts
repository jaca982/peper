import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add fill class when fill input equal true', () => {
    const button: HTMLElement = fixture.debugElement.query(By.css('.btn')).nativeElement;
    component.fill = true;
    fixture.detectChanges();
    expect(button.classList).toContain('btn__fill');
  });

  it('should display label', () => {
    const label = 'testLabel';
    component.label = label;
    const button: HTMLElement = fixture.debugElement.query(By.css('.btn')).nativeElement;
    fixture.detectChanges();
    expect(button.textContent).toContain(label);
  });
});
