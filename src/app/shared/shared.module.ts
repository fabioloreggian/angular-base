import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipePipe } from './test-pipe/test-pipe.pipe';
import { TestServiceService } from './test-service/test-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestPipePipe],
  providers: [TestServiceService],
  exports: [TestPipePipe]
})
export class SharedModule { }
