import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facade-layout',
  templateUrl: './facade-layout.component.html',
  styleUrls: ['./facade-layout.component.scss']
})
export class FacadeLayoutComponent {

  currentYear: number = new Date().getFullYear();
}
