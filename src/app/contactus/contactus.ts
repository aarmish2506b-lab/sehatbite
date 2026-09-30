import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [],
  template: `
    <section class="contact-wrapper">
      <div class="contact-card">
        <h1>Contact Us</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control" placeholder="Enter your full name" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Enter your email" required />
          </div>
          <div class="col-12">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="4" placeholder="Write your message..."></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrl: './contactus.css',
})
export class CONTACTUS {}
