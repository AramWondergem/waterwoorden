import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from "papaparse";
import {forkJoin, map, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getFiles(filePaths: string[]): Observable<any> {
    const fileObservables: Observable<string[][]>[] = filePaths.map(filePath =>
      this.http.get(filePath, { responseType: 'text' }).pipe(
        map(data => Papa.parse(data, { header: false }).data as string[][])
      )
    );

    const firstArray: string[][] = [];

    return forkJoin(fileObservables).pipe(
      map((arrays: string[][][]) => firstArray.concat(...arrays)),
      map((data: string[][]) => data.sort((a: string[], b: string[]) => a[0].localeCompare(b[0])))
    );
  }

  capitalizeFirstLetter(string: any) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


}
