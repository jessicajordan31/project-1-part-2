<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="home-page">
    <Header />

    <!-- HERO SECTION -->
    <section class="hero">
      <!-- Main homepage image -->
      <img
        class="hero-img"
        src="@/assets/homepage-main.jpg"
        alt="Financial advisor meeting with client"
      />

      <div class="hero-overlay"></div>

      <div class="hero-text">
        <h1>
          Her Capital Empowers Women<br />
          Redefining Wealth
        </h1>

        <div class="hero-buttons">
          <button class="btn-primary">Get Started</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>

    <!-- STORIES SECTION -->
    <section class="stories">
      <h2>Stories from Strong Women</h2>
      <p class="subtitle">Real journeys of empowerment and growth</p>

      <div class="story-grid">
        <div class="story-card">
          <img src="@/assets/homepage-story-1.jpg" alt="Story 1" />
          <div class="story-info">
            <h3>From Debt to Dream: Limi’s Journey to Financial Freedom</h3>
            <span class="date">Aug 10, 2023</span>
          </div>
        </div>

        <div class="story-card">
          <img src="@/assets/homepage-story-2.jpg" alt="Story 2" />
          <div class="story-info">
            <h3>New Beginnings: How Priya Launched Her Business</h3>
            <span class="date">Sep 22, 2023</span>
          </div>
        </div>

        <div class="story-card">
          <img src="@/assets/homepage-story-3.jpg" alt="Story 3" />
          <div class="story-info">
            <h3>Smart Investments: Michelle’s Confidence with Money</h3>
            <span class="date">Nov 15, 2023</span>
          </div>
        </div>

        <div class="story-card">
          <img src="@/assets/homepage-story-4.jpg" alt="Story 4" />
          <div class="story-info">
            <h3>Samia Empowers Her Community Through Education</h3>
            <span class="date">Dec 8, 2023</span>
          </div>
        </div>
      </div>

      <!-- FAQ TAG BUTTONS -->
      <div class="faq-tags">
        <button>What does this site offer?</button>
        <button>What is financial literacy?</button>
        <button>Why is independence important?</button>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  background-color: #ffffff;
}

/* ---------- HERO ---------- */
.hero {
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.1)
  );
}

.hero-text {
  position: absolute;
  left: 6%;
  max-width: 650px;
  color: #ffffff;
}

.hero-text h1 {
  font-family: 'Jomolhari', serif;
  font-size: 3.6rem;
  line-height: 1.1;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
}

.hero-buttons {
  margin-top: 2.2rem;
  display: flex;
  gap: 1rem;
}

/* Buttons */
.btn-primary {
  padding: 1rem 2.6rem;
  background-color: #465786;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

.btn-secondary {
  padding: 1rem 2.6rem;
  background-color: #a3bbe4;
  color: #000000;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2f3d63;
}

.btn-secondary:hover {
  background-color: #90aed6;
}

/* ---------- STORIES SECTION ---------- */
.stories {
  padding: 4rem 3rem;
}

.stories h2 {
  font-family: 'Jomolhari', serif;
  font-size: 2.6rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-top: 0.3rem;
  margin-bottom: 2rem;
}

.story-grid {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding-bottom: 1.5rem;
}

.story-card {
  width: 300px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: 5px 10px 23px rgba(0, 0, 0, 0.18);
  flex-shrink: 0;
}

.story-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
}

.story-info {
  padding: 1rem;
}

.story-info h3 {
  font-family: 'Zen Kaku Gothic New', sans-serif;
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
}

.date {
  font-size: 0.85rem;
  color: #555555;
}

/* FAQ tag buttons */
.faq-tags {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.faq-tags button {
  padding: 0.8rem 1.4rem;
  border-radius: 20px;
  border: 1px solid #a3bbe4;
  background: #f5f8ff;
  cursor: pointer;
  font-size: 0.95rem;
}

.faq-tags button:hover {
  background-color: #a3bbe4;
  color: #ffffff;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
  .hero-text {
    left: 7%;
    right: 7%;
  }

  .hero-text h1 {
    font-size: 2.6rem;
  }
}

@media (max-width: 600px) {
  .hero {
    height: 70vh;
  }

  .hero-buttons {
    flex-direction: column;
    max-width: 240px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .stories {
    padding: 3rem 1.5rem;
  }
}
</style>

