import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayHamburgherButton: boolean = true;
  displayCloseButton: boolean = false;
  showMenu: boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 560px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 560px or greater!');
          this.showMenu = false;
        } else {
          console.log('Viewport width is less than 560px!');
          this.showMenu = true;
          this.displayCloseButton = true;
          this.displayHamburgherButton = false;
        }
      });
  }

  hideMenu() {
    this.displayHamburgherButton = false;
    this.displayCloseButton = true;
    this.showMenu = true;
  }

  openMenu() {
    this.displayHamburgherButton = true;
    this.displayCloseButton = false;
    this.showMenu = false;
  }
}
