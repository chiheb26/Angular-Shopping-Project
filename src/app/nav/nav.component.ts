import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-nav', // put selector inside [] to use it as an html attribute : [app-nav] // put . before selector name to use it as a css class : .app-nav
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
siteName:string="eShopping"
}
