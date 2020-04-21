import { TattoosService } from '../../services/tattoos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.css']
})
export class TattooComponent {

  tattoo: any = {};

  constructor( private activatedRoute: ActivatedRoute, public _tattoosService: TattoosService) {
    this.activatedRoute.params.subscribe( (params: any) => {
      this.tattoo = this._tattoosService.getTattoo(params['id']);
    });
   }

 

}
