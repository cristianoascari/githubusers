// Angular modules.
import { Injectable } from '@angular/core';

// RxJS.
import { Observable, Subject } from 'rxjs';

// Models.
import { EBroadcast, IBroadcast } from 'src/app/shared/models';

@Injectable({providedIn: 'root'})
export class BroadcastService {
  protected subject: Subject<IBroadcast> = new Subject<IBroadcast>();
  public events: Observable<IBroadcast> = this.subject.asObservable();

  public sendBroadcast(key: EBroadcast, value?: any): void {
    this.subject.next({ key, value });
  }
}
