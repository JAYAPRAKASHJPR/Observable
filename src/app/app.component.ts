import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {
    const test$ = new Observable(subscriber => {
      console.log('test$');
      subscriber.next('1');
      subscriber.error('error occurred');
      subscriber.complete();
      subscriber.next('2');
      setTimeout(() => subscriber.next('3'), 1000);
    });
    console.log('starting');
    test$.subscribe(
      x => {
        console.log(x);
      },
      error => {
        console.log('error', error);
      },
      function complete() {
        console.log('complete...');
      }
    );
  }
}
