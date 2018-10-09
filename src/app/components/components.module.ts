import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  declarations: [TestComponentComponent],
  exports: [TestComponentComponent],
})
export class ComponentsModule { }
