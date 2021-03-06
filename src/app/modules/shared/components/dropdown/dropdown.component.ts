import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy
} from '@angular/core';
import { EventHelperService } from '../../services/event-helper/event-helper.service';
import { Subscription } from 'rxjs';
import { DropdownOptionModel } from './models/dropdown-option';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input()
  label: string;

  @Input()
  options: DropdownOptionModel[];

  @Output()
  selectOption: EventEmitter<DropdownOptionModel> = new EventEmitter();

  showOptions = false;

  private clickSub = new Subscription();

  constructor(private readonly elementRef: ElementRef, private cdr: ChangeDetectorRef, private eventHelper: EventHelperService) {}

  ngOnInit() {}

  private addDocumentClickListner() {
    this.clickSub = this.eventHelper.click.subscribe(e => this.onDocumentClick(e));
  }

  private removeDocumentClickListner() {
    this.clickSub.unsubscribe();
  }

  private toggleEventListner(addEvent: boolean) {
    if (addEvent) {
      this.addDocumentClickListner();
    } else {
      this.removeDocumentClickListner();
    }
  }

  toggleDropdown() {
    this.showOptions = !this.showOptions;
    this.toggleEventListner(this.showOptions);
    this.cdr.detectChanges();
  }

  closeDropdown() {
    this.showOptions = false;
    this.cdr.detectChanges();
  }

  public onDocumentClick(event: MouseEvent) {
    if (this.showOptions && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
      this.removeDocumentClickListner();
    }
  }

  onSelectOption(option: DropdownOptionModel) {
    this.label = option.label;
    this.selectOption.emit(option);
    this.closeDropdown();
  }

  ngOnDestroy() {
    this.removeDocumentClickListner();
  }
}
