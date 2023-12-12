import { Component } from '@angular/core';
import { skills } from 'src/app/service/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  data = skills;
}
