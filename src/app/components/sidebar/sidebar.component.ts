import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

interface LinkModel {
  link: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'] 
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<LinkModel> =[
    {
      link:'https://github.com/nicoayala123',
      icon:'<i class="uil uil-github"></i>'
    },
    {
      link:'nicomicapi123@gmail.com',
      icon:'<i class="uil uil-envelope-minus"></i>'
    },
    {
      link:'https://www.linkedin.com/in/nicolas-ayala-a74a89172 ',
      icon:'<i class="uil uil-linkedin"></i>'
    },
  ];

  constructor() { }
 

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
    });
  
    writer
    .changeCursorColor('white')
    .type('Nicolas Ayala')
    .rest(5000)
    .type()
    .start()  
  };
  
}

