import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private toggleNav: boolean = true;
  private _toggleNavLinks = new Subject<boolean>();
  toggleNavLinks$ = this._toggleNavLinks.asObservable();

  private menuToggle: boolean = false;
  private _toggleMenu = new Subject<boolean>();
  toggleMenu$ = this._toggleMenu.asObservable();

  constructor() { }

  toggleNavLinks() {
    this.toggleNav = !this.toggleNav;
    this._toggleNavLinks.next(this.toggleNav);
  }

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
    this._toggleMenu.next(this.menuToggle);
  }
}
