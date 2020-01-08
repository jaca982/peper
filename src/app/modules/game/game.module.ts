import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GameLayoutComponent } from './game-layout/game-layout.component';
import { GameRoutingModule } from './game-routing.module';
import { GameTableComponent } from './pages/game-table/game-table.component';

@NgModule({
  declarations: [HomeComponent, GameLayoutComponent, GameTableComponent],
  imports: [CommonModule, GameRoutingModule, SharedModule]
})
export class GameModule {}
