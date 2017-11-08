import { Component, OnInit } from '@angular/core';
import {BikesService, Bike} from '../../services/bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html'
})
export class BikesComponent implements OnInit {

  bikes:Bike[] = [];

  constructor(private _bikeservice:BikesService) { }

  ngOnInit() {
    this.bikes = this._bikeservice.getBikes();

    console.log(this.bikes);
  }

}
