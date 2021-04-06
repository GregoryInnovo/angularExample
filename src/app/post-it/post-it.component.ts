import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})

export class PostItComponent implements OnInit {

  colorResult: string;
  titleResult: string;
  contentResult: string;

  constructor() {
    this.titleResult = "Default Title";
    this.contentResult = "Default Content: Lorem ipsum dolor sit amet";
    this.colorResult = "White";
  }

  ngOnInit(): void {
  }

  num1: number = 0;
  num2: number = 0;
  operation: number = 0;

  tareas: object[] = [];

  number1(n: string) {
    this.titleResult = n;
  }


  textDesc(n: string) {
    this.contentResult = n;
  }

  addTask(event, input1, input2) {

    event.preventDefault();
    if (this.colorResult === "White" || input2.value == '' || input1.value == '') {
      alert("Elije un color / Completa los campos");
    } else {
      let task = {
        colorResult: "",
        titleResult: "",
        contentResult: ""
      };
      task.colorResult = this.colorResult;
      task.titleResult = this.titleResult;
      task.contentResult = this.contentResult;

      this.tareas.push(task);

      input1.value = null;
      input2.value = null;

      this.reset();

    }
  }

  normal() {
    this.colorResult = "linear-gradient(0deg, rgba(30,121,9,1) 0%, rgba(255,255,255,0.8407738095238095) 100%)"
  }

  priority() {
    this.colorResult = "linear-gradient(0deg, rgba(121,9,9,1) 0%, rgba(255,255,255,0.7819502801120448) 87%)";
   
  }

  reset() {
    this.titleResult = "Default Title";
    this.contentResult = "Default Content: Lorem ipsum dolor sit amet";
    this.colorResult = "White";
  }

}
