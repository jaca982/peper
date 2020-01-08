import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameTableService } from './game-table.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  constructor(private router: Router, private gameService: GameTableService) {}

  ngOnInit() {
    this.gameService.getCard().subscribe(el => console.log(el));
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
