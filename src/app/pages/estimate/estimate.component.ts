import { Component } from '@angular/core';

import { AngularFileUploaderModule } from "angular-file-uploader";

@Component({
  selector: 'ngx-estimate',
  templateUrl: './estimate.component.html',
})
export class EstimateComponent {
  afuConfig = {
    multiple: false,
    formatsAllowed: ".ls8,.ls7",
    maxSize: "250",
    uploadAPI:  {
      url:"https://example-file-upload-api",
      headers: {
     "Content-Type" : "text/plain;charset=UTF-8",
     //"Authorization" : `Bearer ${token}`
     "Authorization" : `Bearer xx`
      }
    },
    //theme: "",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false
  };
}
