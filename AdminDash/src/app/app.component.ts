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
        const blockHeader = block.querySelector(".block-header") as HTMLElement;
        const linkList = block.querySelector(".linkList") as HTMLElement;

        var listOpen = false;

        blockHeader.addEventListener("click", () => {
          linkList.style.display = "flex";
          listOpen = true;

          if (linkList.style.display = "flex") {
            blockHeader.addEventListener("click", () => {
              linkList.style.display = "none";
              listOpen = true;
            });
          }
        });

      })

      
  }
}
