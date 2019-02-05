import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { EstimateComponent } from './estimate.component';

import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  imports: [
    ThemeModule,
    AngularFileUploaderModule
  ],
  declarations: [
    EstimateComponent,
  ],
  providers: [
    
  ],
})
export class EstimateModule { 
 
};
