import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/Project';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
})
export class ProjectPageComponent implements OnInit {
  project?: Project;
  projectID: any;
  listLenght: number = this.projectService.getProjects().length;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.projectID = param.get('id');
      this.project = this.projectService
        .getProjects()
        .find((x) => x.id == this.projectID);
      console.log(this.projectID);
    });
  }

  displayNextProjectName() {
    if (this.projectID == this.listLenght) {
      return this.projectService.getProjects()[0].name;
    }
    return this.projectService.getProjects()[+this.projectID].name;
  }

  displayPrevProjectName() {
    const prev = this.projectService.getProjects()[+this.projectID - 2];

    if (this.projectID == 1) {
      return this.projectService.getProjects()[this.listLenght - 1].name;
    }
    return prev.name;
  }

  goToPrevProj() {
    if (this.projectID > 1) {
      this.router.navigateByUrl(
        `Portfolio/Project/${
          this.projectService.getProjects()[+this.projectID - 2].id
        }`
      );
    } else {
      this.router.navigateByUrl(
        `Portfolio/Project/${
          this.projectService.getProjects()[this.listLenght - 1].id
        }`
      );
    }
  }
  goToNextProj() {
    if (this.projectID == this.listLenght) {
      this.router.navigateByUrl(
        `Portfolio/Project/${this.projectService.getProjects()[0].id}`
      );
    } else {
      this.router.navigateByUrl(
        `Portfolio/Project/${
          this.projectService.getProjects()[this.projectID].id
        }`
      );
    }
  }
}
