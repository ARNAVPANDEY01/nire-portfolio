import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
    this.initializeGoogleAnalytics();
  }

  private initializeGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `;
    document.head.appendChild(gtagScript);
  }

  trackEvent(action: string, category: string, label?: string, value?: number) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }

  trackPortfolioView(projectName: string) {
    this.trackEvent('view_project', 'portfolio', projectName);
  }

  trackContactFormSubmit() {
    this.trackEvent('submit_form', 'contact', 'contact_form');
  }

  trackSocialClick(platform: string) {
    this.trackEvent('click_social', 'social_media', platform);
  }
}