import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatCheckboxModule } from "@angular/material";

const MATERIAL=[MatButtonModule,MatCheckboxModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports:MATERIAL
})
export class MaterialModule { }
