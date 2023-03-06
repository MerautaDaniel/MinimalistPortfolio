import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }
  getProjects(): any {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
  }
  goToProjectPage(project: Project) {
    this.projectService.storedProject(project);
    console.log(
      'This is from object stored in the service',
      this.projectService.selectedProjectServ
    );
  }
}
