import {Component, OnInit} from '@angular/core';
import {ExoplanetService} from '../exoplanet/exoplanet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public exoplanets: any[] = [];

  constructor(public exoplanetService: ExoplanetService, private router: Router) {
  }

  ngOnInit() {
    this.getExoplanets();
  }

  private getExoplanets(): void {
    this.exoplanetService.getExoplanets().subscribe(
      data => {
        this.exoplanets = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  goToExoplanet(id: string): void {
    this.router.navigate(['exoplanet', id]);
  }
}
