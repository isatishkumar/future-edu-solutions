import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeElapsedPipe } from './pipes/time-elapsed.pipe';
import { FileUploadComponent } from './file-upload/file-upload.component';



@NgModule({
  declarations: [
    TimeElapsedPipe,
    FileUploadComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TimeElapsedPipe]
})
export class SharedModule { }
