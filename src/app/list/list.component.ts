import { Component } from "@angular/core";
import { ListItemComponent } from "../list-item/list-item.component";

interface CustomEvent {
  test: number;
}

@Component({
  selector: "app-list",
  imports: [ListItemComponent],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export class ListComponent {
  myPropt = `Hello world!`;

  users = [
    {
      firstName: "Ivan",
      lastName: "Ivanov",
    },
    {
      firstName: "Peter",
      lastName: "Petrov",
    },
    {
      firstName: "Stamat",
      lastName: "Stamatov",
    },
    {
      firstName: "Pescho",
      lastName: "Peschev",
    },
  ];

  showLastName = false;

  selectedUserIndex: null | number = null;

  constructor() {
    // setTimeout(() => {
    //   this.myPropt = `Hello after 5 seconds!`;
    // }, 5000);
  }

  handleClick(event: MouseEvent) {
    this.showLastName = !this.showLastName;
  }

  showSelectedIndex(): boolean {
    return this.selectedUserIndex !== null && this.selectedUserIndex >= 0;
  }

  customEventHandler() {}
}
