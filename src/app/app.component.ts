import { Component } from '@angular/core';
import { MukValidationMessageComponent } from "ngx-mui-kit/components/muk-form/muk-fields/muk-validation-messages";
import { FormControl } from '@angular/forms';
import { IControlCustomErrors } from 'ngx-mui-kit/components/muk-form/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-lib-components';
  controller = new FormControl();
  errors: IControlCustomErrors[] = [{
    errorName:"number",
    errorMessage:"invalid number"
  }];
}
