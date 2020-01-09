import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [DropdownComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, DropdownComponent, CardComponent]
})
export class SharedModule {}
