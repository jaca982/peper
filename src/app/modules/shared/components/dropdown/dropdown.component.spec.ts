import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle options list', () => {
    component.showOptions = false;
    component.toggleDropdown();
    expect(component.showOptions).toEqual(true);
    component.toggleDropdown();
    expect(component.showOptions).toEqual(false);
  });

  it('should emit value and close dropdown', () => {
    const value = { label: 'testLabel', value: 'testValue' };
    spyOn(component.selectOption, 'emit');
    component.showOptions = true;
    component.onSelectOption(value);
    fixture.detectChanges();
    expect(component.selectOption.emit).toHaveBeenCalledWith(value);
    expect(component.showOptions).toEqual(false);
  });
});
