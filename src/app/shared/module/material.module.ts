import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const modules = [
  MatTooltipModule,
  MatButtonModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  DragDropModule,
  LayoutModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class MaterialModule {}
