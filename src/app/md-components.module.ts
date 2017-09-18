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
  MdExpansionModule,
  MdRadioModule
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
    MdExpansionModule,
    MdRadioModule
  ]
 })
export class MdComponentsModule { }
