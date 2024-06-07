import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private toggle: boolean = true;
  private _toggleNavLinks = new Subject<boolean>();
  toggleNavLinks$ = this._toggleNavLinks.asObservable();

  constructor() { }

  toggleNavLinks() {
    this.toggle = !this.toggle;
    this._toggleNavLinks.next(this.toggle);
  }
}
