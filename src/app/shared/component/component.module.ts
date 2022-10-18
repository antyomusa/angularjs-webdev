import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TextinputComponent } from './textinput/textinput.component';
import { EmailinputComponent } from './emailinput/emailinput.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextinputComponent,
    EmailinputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    TableComponent,
    TextinputComponent,
    EmailinputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
