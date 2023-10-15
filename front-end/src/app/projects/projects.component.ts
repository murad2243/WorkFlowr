import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[] =[];
  selected : any={
    projectName: '',
    description: '',
    dueDate: '',
    adminMember: '',
  };
  selectedFlag: boolean =false

  newProject: any = {
    projectName: '',
    description: '',
    dueDate: '',
    adminMember: '',
  };
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    
  }
  selecteProject(project:any){
    this.projectService.selecteProject(project)
    this.selectedFlag =true
    this.selected = project
  }

  deleteProject(index: number) {
    this.projectService.deleteProject(index);
  }

  addMember(index: number) {
    const member = prompt('Enter the member name:');
    if (member) {
      // this.projectService.addMemberToProject(index, member);
      if(this.selected.member){
        this.selected.member= [...this.selected.member, member]
      } 
    }
  }

  addTask() {
    const task = prompt('Enter the task:');
    if(this.selected.tasks.length > 0){
      this.selected.tasks= [...this.selected.tasks, task]
    } else{
      this.selected.tasks = [task]
    }
    console.log(this.selecteProject);
    // this.selected.task = ["kmas"]
  }

  deleteTask( taskIndex: number) {
    this.selected.task.splice(taskIndex,1)
  }

  addNewProject() {
    if (this.newProject.projectName !== "") {
      this.projectService.addProject(this.newProject);
      this.newProject = {}; // Clear the form after adding the project
    } else {
      alert('Please fill in all project details.');
    }
  }
}
