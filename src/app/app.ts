import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  api$!: Observable<any>;

  callApi() {
    this.api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/text'
      },
      body: 'Hello'
    });
  }
}
