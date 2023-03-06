import { Injectable } from '@angular/core';
import { PROJECTS } from './mock-projects';
import { Project } from './Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedProjectServ!: Project;
  constructor() {}
  getProjects(): Project[] {
    return PROJECTS;
  }
  storedProject(project: Project) {
    this.selectedProjectServ = project;
    return this.selectedProjectServ;
  }
}
