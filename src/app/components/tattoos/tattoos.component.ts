import { Component, OnInit } from '@angular/core';
import { TattoosService } from 'src/app/services/tattoos.service';
import { InfoTattoo } from '../../interfaces/infoTattoo.interface';

@Component({
  selector: 'app-tattoos',
  templateUrl: './tattoos.component.html',
  styleUrls: ['./tattoos.component.css']
})
export class TattoosComponent implements OnInit {


  constructor( public _tattoosService: TattoosService) { }

  ngOnInit() {}

}
