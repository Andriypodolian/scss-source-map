import {Component} from '@angular/core';

@Component({
  selector: 'app-test-source-map',
  templateUrl: './test-source-map.component.html',
  styleUrl: './test-source-map.component.scss',
})
export class TestSourceMapComponent {
  constructor() {
    console.log('check console prerender');
  }
}
