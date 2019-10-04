import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
