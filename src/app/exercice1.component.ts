import { Component } from "@angular/core";

@Component({
  selector: "app-exercice1",
  template: `
    <h1>EXERCICE 1</h1>
    <strong>Tapez dans le champ et le même message apparaît à côté</strong
    ><br />
    <input type="text" [(ngModel)]="text" />
    <p style="display:inline-block">Vous écrivez ceci : {{ text }}</p>
    <br /><br />
    <strong
      >Cliquez sur le bouton pour voir affiché la forme géométrique
      associée</strong
    ><br /><br />
    <input
      #input
      type="button"
      [value]="shape"
      (click)="changer(input.value)"
    />
    <div [ngClass]="shape"></div>
    <hr />
  `,
  styles: [
    `
      .square {
        width: 200px;
        height: 200px;
        background-color: red;
      }
      .circle {
        width: 200px;
        height: 200px;
        background-color: green;
        border-radius: 50%;
      }
    `,
  ],
})
export class Exercice1Component {
  text: string = "";
  shape: string = "square";

  changer(valeur: string) {
    if (valeur == "square") {
      this.shape = "circle";
    } else if (valeur == "circle") {
      this.shape = "square";
    }
  }
}
