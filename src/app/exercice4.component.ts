import { Component } from "@angular/core";

@Component({
  selector: "app-exercice4",
  template: `
    <h1>EXERCICE 4</h1>
    <ul>
      <li *ngFor="let animal of texts; let i = index">{{ i }}-{{ animal }}</li>
    </ul>
  `,
  styles: [],
})
export class Exercice4Component {
  texts: string[] = ["Ours", "Dauphin", "Lion"];
}
