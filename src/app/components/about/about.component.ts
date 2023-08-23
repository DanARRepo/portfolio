import { Component, OnInit } from '@angular/core';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  github = faSquareGithub;
  linkedIn = faLinkedin;

  constructor() {}

  ngOnInit(): void {
  }

}
