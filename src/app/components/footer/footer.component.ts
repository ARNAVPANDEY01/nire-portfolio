import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' }
  ];

  socialLinks = [
    { name: 'YouTube', icon: 'images/OIP.webp', href: 'https://www.youtube.com/@nire_music' },
    { name: 'Instagram', icon: 'images/OIP.jpg', href: 'https://www.instagram.com/nire001' },
    { name: 'Email', icon: '✉', href: 'mailto:nire0110@gmail.com' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}