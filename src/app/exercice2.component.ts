import { Component } from "@angular/core";

@Component({
  selector: "app-exercice2",
  template: `
    <h1>EXERCICE 2</h1>
    <strong>Un simple clic affichera le message "clic" dans la console</strong
    ><br /><br />
    <button (click)="messageConsole()">cliquez ici</button>
    <hr />
  `,
  styles: [],
})
export class Exercice2Component {
  messageConsole() {
    console.log("clic");
  }
}
