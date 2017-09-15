import { NgModule } from '@angular/core';

import { MdCheckboxModule,
  MdIconModule,
  MdToolbarModule,
  MdButtonModule,
  MdMenuModule,
  MdDialogModule,
  MdInputModule,
  MdCardModule,
  MdListModule,
  MdExpansionModule
} from '@angular/material';

@NgModule({
  exports: [
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,
    MdDialogModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MdExpansionModule
  ]
 })
export class MdComponentsModule { }
