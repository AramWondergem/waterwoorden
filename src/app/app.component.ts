import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {NgClass, NgIf} from "@angular/common";
import {NavLinksComponent} from "./components/nav-links/nav-links.component";
import {DataSharingService} from "./services/data-sharing.service";
import {InfoPageComponent} from "./components/info-page/info-page.component";
import {ListPageComponent} from "./components/list-page/list-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NgClass, NavLinksComponent, InfoPageComponent, ListPageComponent, NgIf],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waterwoorden';
  menuToggle: boolean = false;
  toggleComponent: boolean = true;

  constructor(
    private dataService: DataSharingService
  ) {
    this.dataService.toggleNavLinks$.subscribe((value: boolean)  => this.toggleComponent = value)
  }


  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
  onNavClick() {
    this.toggleMenu()
  }


}
