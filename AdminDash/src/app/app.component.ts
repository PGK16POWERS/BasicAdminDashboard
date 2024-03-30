import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AdminDash';

  ngOnInit(): void {
      const block = document.querySelectorAll(".block") as NodeListOf<HTMLElement>;

      block.forEach(block => {
        const blockHeader = document.querySelector(".block-header") as HTMLElement;
        const linkList = document.querySelector(".linkList") as HTMLElement;

          blockHeader.addEventListener("click", () => {
            const linkList = document.querySelector(".linkList") as HTMLElement;
            linkList.classList.toggle("open-close");
          })
      })
  }
}
