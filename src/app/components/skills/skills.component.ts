import { Component, OnInit } from '@angular/core';
import { SkillsInfoModel } from '../../models/skillsModels';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: SkillsInfoModel[] = [
    {
      skillName: 'Angular',
      skillLevel: 'Medio',
      skillImage: '../../../assets/images/angular_logo.png',
    },
    {
      skillName: 'TypeScript',
      skillLevel: 'Medio',
      skillImage: '../../../assets/images/Typescript_logo.png',
    },
    {
      skillName: 'JavaScript',
      skillLevel: 'Medio',
      skillImage: '../../../assets/images/javascript_logo.png',
    },
    {
      skillName: 'NodeJS',
      skillLevel: 'Medio',
      skillImage: '../../../assets/images/Node_logo.png',
    },
    // {
    //   skillName: 'Vue',
    //   skillLevel: 'Principiante',
    //   skillImage: '../../../assets/images/vue_logo.png',
    // },
    {
      skillName: 'Playwright',
      skillLevel: 'Principiante',
      skillImage: '../../../assets/images/playwright_logo.png',
    },
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
