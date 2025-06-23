import { Component } from "@angular/core";

@Component({
  selector: "app-list",
  imports: [],
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

  constructor() {
    // setTimeout(() => {
    //   this.myPropt = `Hello after 5 seconds!`;
    // }, 5000);
  }
}
