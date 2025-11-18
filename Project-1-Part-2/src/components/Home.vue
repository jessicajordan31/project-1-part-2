<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Homepage images
import heroImg from '@/assets/homepage-main.jpg'
import story1 from '@/assets/homepage-story-1.jpg'
import story2 from '@/assets/Homepage-story-2.jpg'
import story3 from '@/assets/homepage-story-3.jpg'
import story4 from '@/assets/homepage-story-4.jpg'
</script>

<template>
  <Header />

 
  <section class="hero" :style="{ backgroundImage: `url(${heroImg})` }">
    <div class="hero-content">
      <h1>Her Capital Empowers Women<br>Redefining Wealth</h1>

      <div class="hero-buttons">
        <button class="btn-primary">Get Started</button>
        <button class="btn-secondary">Learn More</button>
      </div>
    </div>
  </section>

 
  <section class="stories">
    <h2>Stories from Strong Women</h2>
    <p class="subtitle">Real journeys of empowerment and growth</p>

    <div class="story-grid">
      <div class="story-card">
        <img :src="story1" alt="">
        <div class="story-info">
          <h3>From Debt to Dream</h3>
          <span class="date">Aug 10, 2023</span>
        </div>
      </div>

      <div class="story-card">
        <img :src="story2" alt="">
        <div class="story-info">
          <h3>New Beginnings: Priya Launched Her Business</h3>
          <span class="date">Sep 22, 2023</span>
        </div>
      </div>

      <div class="story-card">
        <img :src="story3" alt="">
        <div class="story-info">
          <h3>Smart Investments: Michelle’s Confidence</h3>
          <span class="date">Oct 15, 2023</span>
        </div>
      </div>

      <div class="story-card">
        <img :src="story4" alt="">
        <div class="story-info">
          <h3>Samia Empowers Her Community</h3>
          <span class="date">Dec 8, 2023</span>
        </div>
      </div>
    </div>

   
    <div class="faq-tags">
      <button>What does this site offer?</button>
      <button>What is financial literacy?</button>
      <button>Why is independence important?</button>
    </div>
  </section>

  <Footer />
</template>

<style scoped>

section {
  width: 100%;
  padding: 0;
  margin: 0;
}


.hero {
  height: 80vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-left: 4rem;
}

.hero-content h1 {
  font-family: "Jomolhari", serif;
  font-size: 60px;
  color: white;
  line-height: 1.1;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.hero-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn-primary {
  padding: 1rem 2.5rem;
  background-color: #465786;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-secondary {
  padding: 1rem 2.5rem;
  background-color: #A3BBE4;
  color: black;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #2f3d63;
}

.btn-secondary:hover {
  background-color: #8faad3;
}


.stories {
  padding: 4rem 3rem;
}

.stories h2 {
  font-family: "Jomolhari", serif;
  font-size: 42px;
}

.subtitle {
  font-size: 20px;
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
  background: white;
  border: 1px solid #ccc;
  box-shadow: 5px 10px 23px rgba(0,0,0,0.18);
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
  font-size: 20px;
  margin-bottom: 0.4rem;
  font-family: "Zen Kaku Gothic New", sans-serif;
}

.date {
  font-size: 14px;
  color: #555;
}


.faq-tags {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.faq-tags button {
  padding: 0.8rem 1.3rem;
  border-radius: 20px;
  border: 1px solid #A3BBE4;
  background: #F5F8FF;
  cursor: pointer;
  font-size: 16px;
}

.faq-tags button:hover {
  background-color: #A3BBE4;
  color: white;
}


@media (max-width: 900px) {
  .hero {
    padding: 2rem;
  }

  .hero-content h1 {
    font-size: 42px;
  }
}

@media (max-width: 600px) {
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 250px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>

