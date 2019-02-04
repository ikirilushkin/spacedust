import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exoplanet-card',
  templateUrl: './exoplanet-card.component.html',
  styleUrls: ['./exoplanet-card.component.scss']
})
export class ExoplanetCardComponent implements OnInit {
  @Input()
  planet: any;

  constructor() {}

  ngOnInit() {
  }

}
