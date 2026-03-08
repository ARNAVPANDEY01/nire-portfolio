import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: Date;
  readTime: number;
  image: string;
  author: string;
  featured: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent implements OnInit {
  
  blogPosts: BlogPost[] = [];
  categories = ['All'];
  selectedCategory = 'All';
  filteredPosts: BlogPost[] = [];

  ngOnInit() {
    this.filteredPosts = this.blogPosts;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredPosts = this.blogPosts;
    } else {
      this.filteredPosts = this.blogPosts.filter(post => post.category === category);
    }
  }

  getFeaturedPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.featured);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}