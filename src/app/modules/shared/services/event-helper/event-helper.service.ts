import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

const DocumentClickEventCode = 'mousedown';

@Injectable({
  providedIn: 'root'
})
export class EventHelperService implements OnDestroy {
  private clickSubject = new Subject<MouseEvent>();

  readonly click = this.clickSubject.asObservable();

  private eventListnerRef;

  constructor(private readonly zone: NgZone) {
    this.eventListnerRef = this.onDocumentClick.bind(this);
    this.zone.runOutsideAngular(() => {
      document.addEventListener(DocumentClickEventCode, this.eventListnerRef);
    });
  }

  private onDocumentClick(event: MouseEvent) {
    this.clickSubject.next(event);
    console.log('clik');
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      document.removeEventListener(DocumentClickEventCode, this.eventListnerRef);
    });
  }
}
