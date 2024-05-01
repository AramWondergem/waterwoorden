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

  constructor(service: ServiceService,
              private renderer: Renderer2) {
    this.service = service;
    this.service.getFiles(['assets/waternamen03_L_natuurlijk.csv', 'assets/waternamen03_R_mensgemaakt.csv']).subscribe(data => {
      console.log(data);
      this.waterWordsList = data;
      this.filteredWaterwords = data;
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
      return;
    }

    if(text.length == 1) {
      this.filteredWaterwords = this.waterWordsList.filter(
        waterWordObject => waterWordObject[0]?.toLowerCase().startsWith(text.toLowerCase())
      );
      return;
    }

    this.filteredWaterwords = this.waterWordsList.filter(
      waterWordObject => waterWordObject[0]?.toLowerCase().includes(text.toLowerCase())
    );
    console.log(this.filteredWaterwords);
  }

  onKeyUp() {
    this.searchTermStream.next(this.searchTerm);
  }

  scrollToTop() {
    this.renderer.setProperty(this.scrollContainer.nativeElement, 'scrollTop', 0);
  }

}
