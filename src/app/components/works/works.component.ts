import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  video?: string;
  link?: string;
  client: string;
  year: number;
  featured: boolean;
  stats?: {
    views?: string;
    streams?: string;
    engagement?: string;
  };
}

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  
  projects: Project[] = [
    {
      id: 'project1',
      title: 'Jaana',
      description: 'Lyricist & Composer: Nire | Singer: Sameer',
      category: 'Song Lyrics',
      tags: ['Lyrics', 'Composition', 'Sameer'],
      image: 'images/NIRE PRESENTS.png',
      video: 'https://youtu.be/TgxWYzTrHkM',
      client: 'Sameer',
      year: 2024,
      featured: true
    },
    {
      id: 'project2',
      title: 'Teri Yaad',
      description: 'Lyricist & Composer: Nire | Singer: Riya Aggarwal',
      category: 'Song Lyrics',
      tags: ['Lyrics', 'Composition', 'Riya Aggarwal'],
      image: 'images/Teri_Yaad_.png',
      video: 'https://youtu.be/Qzvm_QH62e8',
      client: 'Riya Aggarwal',
      year: 2024,
      featured: true
    }
  ];

  categories = ['All', 'Song Lyrics', 'Poetry', 'Shayari'];
  selectedCategory = 'All';
  filteredProjects: Project[] = [];
  selectedProject: Project | null = null;
  isModalOpen = false;
  currentImageIndex = 0;

  ngOnInit() {
    this.filteredProjects = this.projects;
    this.setupIntersectionObserver();
    this.startImageRotation();
  }

  private startImageRotation() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.projects.length;
    }, 13000); // 3s animation + 10s wait = 13s total
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(card => observer.observe(card));
    }, 100);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  openProjectModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  getCategoryIcon(category: string): string {
    return '📋';
  }

  getCurrentProject(): Project {
    return this.projects[this.currentImageIndex];
  }

  setCurrentImage(index: number) {
    this.currentImageIndex = index;
  }
}