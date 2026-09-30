import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="home-hero">
      <div class="hero-content">
        <span class="eyebrow">Fresh • Healthy • Tasty</span>
        <h1>SehatBite</h1>
        <p>
          Enjoy healthy snacks and everyday favorites made with real ingredients and a delicious taste.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" routerLink="/gallery">Explore Gallery</a>
          <a class="btn btn-outline" routerLink="/contactus">Order Now</a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="product-card large">🍏</div>
        <div class="product-card small top">🥕</div>
        <div class="product-card small bottom">🍪</div>
      </div>
    </section>

    <section class="features">
      <div class="feature-box">
        <div class="icon">💚</div>
        <h3>Healthy Choice</h3>
        <p>Thoughtful ingredients for better everyday wellness.</p>
      </div>
      <div class="feature-box">
        <div class="icon">🌿</div>
        <h3>Natural Taste</h3>
        <p>Wholesome flavors without compromising quality.</p>
      </div>
      <div class="feature-box">
        <div class="icon">✨</div>
        <h3>Family Favorite</h3>
        <p>Delicious snacks everyone can enjoy together.</p>
      </div>
    </section>
  `,
  styleUrl: './home.css',
})
export class HOME {}
