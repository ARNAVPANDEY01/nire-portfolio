import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'creative' | 'soft';
  icon: string;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent implements OnInit {
  
  skillCategories: SkillCategory[] = [];
  animatedSkills: Set<string> = new Set();

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillName = entry.target.getAttribute('data-skill');
          if (skillName) {
            setTimeout(() => {
              this.animatedSkills.add(skillName);
            }, 200);
          }
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => observer.observe(bar));
    }, 100);
  }

  getSkillWidth(skill: Skill): string {
    return this.animatedSkills.has(skill.name) ? `${skill.level}%` : '0%';
  }

  getSkillColor(category: string): string {
    return '#735bff';
  }
}