import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  template: `
    <section class="gallery-wrapper">
      <div class="gallery-header">
        <h1>Gallery</h1>
        <p>Explore our healthy product collection and lifestyle highlights.</p>
      </div>

      <div class="gallery-grid">
        <div class="gallery-item">🍎</div>
        <div class="gallery-item">🥕</div>
        <div class="gallery-item">🍪</div>
        <div class="gallery-item">🥤</div>
        <div class="gallery-item">🍫</div>
        <div class="gallery-item">🥗</div>
      </div>
    </section>
  `,
  styleUrl: './gallery.css',
})
export class GALLERY {}
