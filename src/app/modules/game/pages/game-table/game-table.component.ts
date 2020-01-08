import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToHome() {
    this.router.navigate(['']);
  }
}
