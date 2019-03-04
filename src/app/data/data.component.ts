import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  constructor(private route: ActivatedRoute) {
    const someJsonData = route.snapshot.data['loadedJsonData'];

    console.log('Got the data');
  }
}
