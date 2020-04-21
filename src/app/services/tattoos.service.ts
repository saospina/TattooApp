import { InfoTattoo } from '../interfaces/infoTattoo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TattoosService {

  info: InfoTattoo[] = [];

  constructor( private http: HttpClient) {
    this.loadInfo();

  }

  public loadInfo() {
    this.http.get('https://tattoo-d858b.firebaseio.com/tattoos.json').subscribe((resp: InfoTattoo[] ) => {
      this.info = resp;
    });
  }

  getTattoo(index: string) {
    return this.info[index];
  }

  searchTattoos(searchText: string): InfoTattoo[] {
    let tattoosArr: InfoTattoo[] = [];
    searchText.toLowerCase();

    for (let tattoo of this.info) {
      let name = tattoo.name.toLowerCase();
      if (name.indexOf(searchText) >= 0) {
        tattoosArr.push(tattoo);
      }

    }
    return tattoosArr;


  }
}
