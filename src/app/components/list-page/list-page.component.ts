import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {FormsModule} from "@angular/forms";
import {debounceTime, delay, map, of, Subject, switchMap} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  filteredWaterwords: string[][] = [];
  waterWordsList: string[][] = [];
  searchTerm: string = '';
  private searchTermStream = new Subject<string>();
  service: ServiceService;
  isLoading: boolean = true;

  constructor(service: ServiceService,
              private renderer: Renderer2) {
    this.service = service;
    this.service.getWaterWordsList().subscribe(data => {
      this.waterWordsList = data;
      this.filteredWaterwords = data;
      this.isLoading = false;
    });

    this.searchTermStream.pipe(
      debounceTime(200),
      switchMap(searchTerm => of(this.filterResults(searchTerm)))).subscribe()
  }

  filterResults(text: string) {
    if(this.filteredWaterwords.length > 0) {
      this.scrollToTop();
    }

    if (!text) {
      this.filteredWaterwords = this.waterWordsList;
      this.isLoading = false;
      return;
    }

    if(text.length == 1) {
      this.filteredWaterwords = this.waterWordsList.filter(
        waterWordObject => waterWordObject[0]?.toLowerCase().startsWith(text.toLowerCase())
      );

      this.isLoading = false;
      return;
    }

    this.filteredWaterwords = this.waterWordsList.filter(
      waterWordObject => waterWordObject[0]?.toLowerCase().includes(text.toLowerCase())
    );
    this.isLoading = false;
  }

  onKeyUp() {
    this.isLoading = true;
    this.searchTermStream.next(this.searchTerm);
  }

  scrollToTop() {
    this.renderer.setProperty(this.scrollContainer.nativeElement, 'scrollTop', 0);
  }

  clearInput(inputField: HTMLInputElement): void {
    this.isLoading = true;
    this.searchTerm = '';
    inputField.focus(); // Optionally, focus the input field after clearing
    this.searchTermStream.next(this.searchTerm);
  }

}
