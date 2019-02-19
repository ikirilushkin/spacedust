import { Component, OnInit } from '@angular/core';
import {Exoplanet} from './exoplanet.model';
import {ActivatedRoute} from '@angular/router';
import {ExoplanetService} from './exoplanet.service';

@Component({
  selector: 'app-exoplanet',
  templateUrl: './exoplanet.component.html',
  styleUrls: ['./exoplanet.component.scss']
})
export class ExoplanetComponent implements OnInit {
  exoplanet: Exoplanet = {
    _id: '',
    name: '',
    description: '',
    radius: '',
    orbitalPeriod: '',
    discoveryYear: '',
    image: ''
  };

  constructor(private route: ActivatedRoute, private exoplanetService: ExoplanetService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getExoplanet(param.id);
    });
  }

  private getExoplanet(id: string): void {
    this.exoplanetService.getExoplanet(id).subscribe(
      data => {
        this.exoplanet = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

}
