import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PROJECTS } from 'src/app/mock-projects';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css'],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() project!: Project;
  @Output() selectedProject: EventEmitter<Project> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  showFullProject(project: Project) {
    this.selectedProject.emit(project);
  }
}
