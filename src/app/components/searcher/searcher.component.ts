import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TattoosService } from '../../services/tattoos.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  tattoos: any [] = [];
  searching: string;

  constructor( private activatedRoute: ActivatedRoute, private _tatoosService: TattoosService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      this.searching = params['searchid'];
      this.tattoos = this._tatoosService.searchTattoos(params['searchid']);
      console.log(this.tattoos);
      
    });
  }

}
