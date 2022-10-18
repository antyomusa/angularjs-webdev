import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  getFruit(): Observable<any> {
    return of('apple', 'manggis');
  }

  customObservable(): Observable<any> {
    return new Observable((Subscriber) => {

      setTimeout(() => {
        Subscriber.next('apel');
      }, 3000);
    });
  }
}
