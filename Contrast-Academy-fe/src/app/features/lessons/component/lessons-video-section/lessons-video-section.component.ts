import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-lessons-video-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons-video-section.component.html',
  styleUrl: './lessons-video-section.component.css'
})
export class LessonsVideoSectionComponent {
  private sanitizer = inject(DomSanitizer);
  
  @Input() set videoUrl(url: string) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  safeUrl: SafeResourceUrl | undefined;
}
