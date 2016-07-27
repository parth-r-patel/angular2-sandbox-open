import { Component, Input } from "@angular/core";

import { TwoComponent } from "./../twoComponent/two.component";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  directives: [TwoComponent]
})
export class AppComponent {

}
