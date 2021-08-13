import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionDirective } from './insertion.directive';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, InsertionDirective],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
