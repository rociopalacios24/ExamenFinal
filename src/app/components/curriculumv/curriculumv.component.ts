import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Tile } from '../../interfaces/tile';
import {MatTableModule} from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-curriculumv',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    RouterLink
  ],
  templateUrl: './curriculumv.component.html',
  styleUrl: './curriculumv.component.css'
})
export class CurriculumvComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
      console.log("curriculum funcionando")
  }

  tiles: Tile[] = [
    {text: 'Ciclismo', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Viajar', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Naturaleza', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Montañismo', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
