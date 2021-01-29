import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotLazyComponent } from './not-lazy/not-lazy.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [NotLazyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    NotLazyComponent
  ]
})
export class M1Module { }
