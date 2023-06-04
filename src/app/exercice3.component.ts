import { Component } from "@angular/core";

@Component({
  selector: "app-exercice3",
  template: `
    <h1>EXERCICE 3</h1>
    <p [style.visibility]="statut ? 'visible' : 'hidden'">
      Ceci est le premier paragraphe
    </p>
    <p [style.visibility]="!statut ? 'visible' : 'hidden'">
      Ceci est le second paragraphe
    </p>
    <br />
    <strong>Cliquez sur le bouton pour alterner les paragraphes</strong
    ><br /><br />
    <button (click)="changerStatut()">Changer paragraphe</button><br />
    <hr />
  `,
  styles: [],
})
export class Exercice3Component {
  statut: boolean = true;
  changerStatut() {
    this.statut = !this.statut;
  }
}
