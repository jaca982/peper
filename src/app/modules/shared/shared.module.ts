import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent, DropdownComponent, CardComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ButtonComponent, DropdownComponent, CardComponent]
})
export class SharedModule {}
