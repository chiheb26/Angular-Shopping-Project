import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [hidden]="hideNotification"  class="alert alert-success">
                   This website uses cookies to provide better user experience.
                   <div (click)="closeNotification()" class="close"><button class="btn">X</button></div>
              </div>`,
  styles: [".notification-div{margin: 10px 0px;padding: 10px 20px;background-color: #FAD7A0;text-align:center;}",
"p{font-size:14px}",
".close{float:right;margin-top:-15px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNotification(){
    this.hideNotification=true;
  }
  hideNotification : boolean=false;
}
