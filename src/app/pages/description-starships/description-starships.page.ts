import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SwapiService} from '../../services/swapi.service';


@Component({
  selector: 'app-description-starships',
  templateUrl: './description-starships.page.html',
  styleUrls: ['./description-starships.page.scss'],
})
export class DescriptionStarshipsPage implements OnInit {

starships:any;
  constructor(private actroute02:ActivatedRoute,private obtserv03:SwapiService) { }

  ngOnInit() {
    this.actroute02.paramMap.subscribe((param) =>{
      let id = param.get('id');
      console.log(id);
      this.starships = this.obtserv03.getSwapi(`starships/${id}`).subscribe(data =>{
        this.starships = data;
        console.log(data);

      });
    });
  }

}
