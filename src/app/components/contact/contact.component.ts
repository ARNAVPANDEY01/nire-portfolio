import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  };

  projectTypes = [
    { value: 'lyrics', label: 'Song Lyrics' },
    { value: 'composition', label: 'Music Composition' },
    { value: 'shayari', label: 'Shayari Writing' },
    { value: 'poetry', label: 'Poetry Collection' },
    { value: 'collaboration', label: 'Creative Collaboration' },
    { value: 'other', label: 'Other Project' }
  ];

  socialLinks = [
    { name: 'YouTube', icon: 'images/OIP.webp', link: 'https://www.youtube.com/@nire_music', color: '#FF0000' },
    { name: 'Instagram', icon: 'images/OIP.jpg', link: 'https://www.instagram.com/nire001', color: '#E4405F' },
    { name: 'Email', icon: '✉', link: 'mailto:nire0110@gmail.com', color: '#735bff' }
  ];

  isSubmitting = false;
  isSubmitted = false;

  ngOnInit() {}

  onSubmit() {
    if (this.isValidForm()) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.resetForm();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          this.isSubmitted = false;
        }, 3000);
      }, 2000);
    }
  }

  private isValidForm(): boolean {
    return !!(this.contactForm.name && 
              this.contactForm.email && 
              this.contactForm.subject && 
              this.contactForm.message);
  }

  private resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: '',
      projectType: ''
    };
  }
}