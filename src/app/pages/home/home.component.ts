import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  

  characters: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.showData();
  }

  showData() {
    this.apiService.getData().subscribe((data) => {
      this.characters = data.results;
      console.log(this.characters);
    });
  }
}
