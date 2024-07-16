import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    const body: HTMLElement = document.querySelector('body') as HTMLElement;
    const sidebar: HTMLElement = body.querySelector('nav') as HTMLElement;
    const toggle: HTMLElement = body.querySelector('.toggle') as HTMLElement;
    const searchBtn: HTMLElement = body.querySelector('.search-box') as HTMLElement;
    const modeSwitch: HTMLElement = body.querySelector('.toggle-switch') as HTMLElement;
    const modeText: HTMLElement = body.querySelector('.mode-text') as HTMLElement;

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close');
    });

    modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
        modeText.innerText = 'Light mode';
      } else {
        modeText.innerText = 'Dark mode';
      }
    });
  }
}