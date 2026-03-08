import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'achievement' | 'project';
  description: string;
  highlights: string[];
  skills: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent implements OnInit {
  
  experiences: Experience[] = [];
  activeExperience: string | null = null;
  visibleExperiences: Set<string> = new Set();

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const expId = entry.target.getAttribute('data-experience-id');
          if (expId) {
            this.visibleExperiences.add(expId);
          }
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const experienceItems = document.querySelectorAll('.timeline-item');
      experienceItems.forEach(item => observer.observe(item));
    }, 100);
  }

  toggleExperience(expId: string) {
    this.activeExperience = this.activeExperience === expId ? null : expId;
  }

  isVisible(expId: string): boolean {
    return this.visibleExperiences.has(expId);
  }

  getTypeIcon(type: string): string {
    const icons = {
      'work': '💼',
      'education': '🎓',
      'achievement': '🏆',
      'project': '🚀'
    };
    return icons[type as keyof typeof icons] || '📋';
  }
}