import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GameTableComponent } from './pages/game-table/game-table.component';
import { GameLayoutComponent } from './game-layout/game-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: GameLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'game',
        component: GameTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
