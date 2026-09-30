import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  imports: [],
  template: `
    <section class="about-wrapper">
      <div class="section-header">
        <h1>Healthy Taste, Real Ingredients.</h1>
        <p>We build delicious food with thoughtful ingredients and a healthier approach for everyday life.</p>
      </div>

      <div class="features-grid">
        <div class="feature-box">
          <h3>Health Focused</h3>
          <p>Thoughtful ingredients for better daily choices.</p>
        </div>
        <div class="feature-box">
          <h3>Natural Sweetness</h3>
          <p>Balanced flavor with wholesome ingredients and real taste.</p>
        </div>
        <div class="feature-box">
          <h3>Great Taste</h3>
          <p>Healthy living can still feel fresh, fun, and delicious.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './aboutus.css',
})
export class ABOUTUS {}
