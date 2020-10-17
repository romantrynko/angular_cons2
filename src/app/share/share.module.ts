import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataComponent } from './show-data/show-data.component';




@NgModule({
  declarations: [ShowDataComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowDataComponent]
})
export class ShareModule { }
