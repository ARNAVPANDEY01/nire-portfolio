import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;

  words = ['Lyricist', 'Poet', 'Storyteller', 'Wordsmith'];
  currentWordIndex = 0;
  currentWord = this.words[0];

  ngOnInit() {
    this.startWordRotation();
  }

  ngAfterViewInit() {
    this.initializeParallax();
  }

  private startWordRotation() {
    setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.currentWordIndex];
    }, 3000);
  }

  private initializeParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element: any) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  scrollToWorks() {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}