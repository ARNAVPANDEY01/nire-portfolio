import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  skills = [
    { name: 'Lyric Writing', level: 95, description: 'Crafting memorable and meaningful song lyrics' },
    { name: 'Poetry', level: 90, description: 'Creating evocative verses and emotional poetry' },
    { name: 'Shayari', level: 88, description: 'Traditional Urdu poetry with modern sensibilities' },
    { name: 'Playwriting', level: 85, description: 'Dramatic storytelling through theatrical works' },
    { name: 'Creative Writing', level: 92, description: 'Versatile storytelling across various formats' }
  ];

  stats = [
    { number: '50+', label: 'Songs Written' },
    { number: '100+', label: 'Poems Created' },
    { number: '25+', label: 'Shayari Collections' },
    { number: '5+', label: 'Plays Written' }
  ];

  ngOnInit() {
    this.animateSkillBars();
  }

  private animateSkillBars() {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach((bar: any, index) => {
        setTimeout(() => {
          bar.style.width = this.skills[index].level + '%';
        }, index * 200);
      });
    }, 500);
  }
}