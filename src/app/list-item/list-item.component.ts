import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-list-item",
  imports: [],
  templateUrl: "./list-item.component.html",
  styleUrl: "./list-item.component.scss",
})
export class ListItemComponent {
  @Input() user!: { firstName: string; lastName: string };
  @Input() showLastName!: boolean;

  @Output() custumEvent = new EventEmitter();

  selectClickHandler() {
    this.custumEvent.emit({ test: 123 });
  }
}
