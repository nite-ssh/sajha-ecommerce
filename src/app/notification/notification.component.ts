import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="alert alert-success" [hidden]="displayNotification">
      <div>
        <p>This website uses cookies to provide better user experience</p>
      </div>
      <div class="close">
        <button class="close" (click)="XBtnClickHandler($event)">X</button>
      </div>
    </div>
  `,
  styles: [
    `
      .alert {
        display: flex;
        justify-content: space-between;
      }
      .cookies p {
        margin: 20px 0px;
        color: #fff;
        padding: 10px 20px;
        background-color: #434343;
        text-align: center;
        font-size: 20px;
      }

      .close {
        border: none;
        background-color: rgba(0, 0, 0, 0);
      }
    `,
  ],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.displayNotification = false;
    }, 2700);
  }

  displayNotification: boolean = true;
  XBtnClickHandler(event: Event): void {
    this.displayNotification = true;
    console.log(<HTMLElement>event.target);
  }
}
