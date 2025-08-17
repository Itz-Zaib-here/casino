import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  sidebar : boolean = false
  showButton : boolean = false
  show(){
    this.sidebar=true
  }
  hide(){
    this.sidebar=false
  }

}
  // const btn = document.getElementById('menu') as HTMLElement 
 
  // const sidebar = document.getElementById("sidebar")  as HTMLElement

  // btn?.addEventListener("click", ()=> {
  //   sidebar.style.display = "flex"
  // })