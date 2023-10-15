import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: any[] = [
    {
      projectName: 'Project 1',
      description: 'Description for Project 1',
      dueDate: '2023-12-31',
      adminMember: 'John Doe',
      tasks: ["task-1"],
    },
    {
      projectName: 'Project 2',
      description: 'Description for Project 2',
      dueDate: '2023-11-30',
      adminMember: 'Jane Smith',
      tasks: [],
    },
  ];
  public selected: any = []
  selectedProject(){
    return this.selected
  }
  selecteProject (project: any){
    this.selected = project
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: any) {
    this.projects.push(project);
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }

  addMemberToProject(projectIndex: number, member: string) {
    this.projects[projectIndex].adminMember = member;
  }

  addTaskToProject(projectIndex:number, task: string) {
    this.projects[projectIndex].tasks.push(task);
  }

  deleteTaskFromProject(projectIndex : number, taskIndex: number) {
    this.projects[projectIndex].tasks.splice(taskIndex, 1);
  }
}
