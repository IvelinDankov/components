import { Component } from "@angular/core";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "app-root",
  imports: [ListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "components";

  changeTitleHandler(titleValue: string) {
    this.title = titleValue;
    titleValue = "";
  }
}
