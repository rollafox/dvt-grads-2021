import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailInputComponent } from '../components/email-input/email-input.component';
import { DoeValidatorDirective } from './directives/doe-validator.directive';

@NgModule({
  declarations: [
    DoeValidatorDirective,
    EmailInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
  ],
  exports: [
    DoeValidatorDirective,
    EmailInputComponent
  ]
})
export class CoreModule { }
