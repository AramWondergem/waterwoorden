import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from "@angular/common";
import {DataSharingService} from "../../services/data-sharing.service";

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  toggle: boolean = true;
  @Input() isMenu: boolean = false; //used to make the nav links sort in collumn instead of row and to make sure that the menu is toggled only when there is a menu.

  constructor(
    private dataService: DataSharingService
  ) {
    this.dataService.toggleNavLinks$.subscribe((value: boolean)  => this.toggle = value);
  }

  onClick() {
    this.dataService.toggleNavLinks();
    if(this.isMenu) {
      this.dataService.toggleMenu();
    }
  }

}
