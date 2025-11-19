<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="home-page">
    <Header />

    <main>
      <section class="hero">
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

      <section class="stories">
        <div class="stories-inner content-container-global">
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
                <span class="date">Nov 15, 2024</span>
              </div>
            </div>

            <div class="story-card">
              <img src="@/assets/homepage-story-4.jpg" alt="Story 4" />
              <div class="story-info">
                <h3>Samia Empowers Her Community Through Education</h3>
                <span class="date">Dec 8, 2024</span>
              </div>
            </div>
          </div>

          <div class="faq-tags">
            <button>What does this site offer?</button>
            <button>What is financial literacy?</button>
            <button>Why is independence important?</button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
:global(html, body, #app) {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  overflow-x: hidden !important;
}

.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
}

main {
  flex: 1;
  width: 100%;
}

.content-container-global {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.hero {
  position: relative;
  width: 100%;
  height: 520px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 10% center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1)
  );
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  max-width: 650px;
  color: #ffffff;
}

.hero-text h1 {
  font-family: 'Jomolhari', serif;
  font-size: 3.6rem;
  line-height: 1.1;
  white-space: pre-line;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
  color: #ffffff;
}

.hero-buttons {
  margin-top: 2.2rem;
  display: flex;
  gap: 1rem;
}

.btn-primary,
.btn-secondary {
  padding: 1rem 2.8rem;
  border-radius: 10px;
  border: none;
  font-size: 1.05rem;
  cursor: pointer;
}

.btn-primary {
  background-color: #465786;
  color: #ffffff;
}

.btn-secondary {
  background-color: #a3bbe4;
  color: #000000;
}

.btn-primary:hover {
  background-color: #2f3d63;
}

.btn-secondary:hover {
  background-color: #90aed6;
}

.stories {
  background: #ffffff;
  padding: 3.5rem 0 4.5rem;
}

.stories-inner h2 {
  font-family: "Jomolhari", serif;
  font-size: 2.4rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 2.2rem;
}

.story-grid {
  display: flex;
  justify-content: space-between;
  gap: 1.75rem;
  margin-bottom: 2.5rem;
}

.story-card {
  flex: 1;
  max-width: 250px;
  border-radius: 18px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.story-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.story-info {
  padding: 1rem 1.1rem 1.1rem;
}

.story-info h3 {
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-size: 0.98rem;
  margin-bottom: 0.45rem;
}

.date {
  font-size: 0.8rem;
  color: #555555;
}

.faq-tags {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.faq-tags button {
  min-width: 360px;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  border: 1px solid #a3bbe4;
  background: #f5f8ff;
  font-size: 0.95rem;
  cursor: pointer;
}

.faq-tags button:hover {
  background-color: #a3bbe4;
  color: #ffffff;
}

@media (max-width: 1050px) {
  .hero-text {
    left: 6%;
    max-width: 520px;
  }

  .hero-text h1 {
    font-size: 3rem;
  }

  .story-grid {
    flex-wrap: wrap;
    justify-content: center;
  }

  .story-card {
    max-width: 280px;
  }
}

@media (max-width: 700px) {
  .hero {
    height: 460px;
  }

  .hero-text {
    left: 7%;
    right: 7%;
  }

  .hero-text h1 {
    font-size: 2.4rem;
  }

  .hero-buttons {
    flex-direction: column;
    max-width: 240px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .faq-tags button {
    width: 100%;
    max-width: 360px;
  }
}
</style>

