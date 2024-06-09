import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Tile } from '../../interfaces/tile';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    RouterLink
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
      console.log("portfolio funcionando")
  }

  tiles: Tile[] = [
    {text: 'Ciclismo', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Viajar', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Naturaleza', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Montañismo', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
