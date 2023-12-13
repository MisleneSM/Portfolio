import { Component } from '@angular/core';
import { projects } from 'src/app/service/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsData = projects;
}
