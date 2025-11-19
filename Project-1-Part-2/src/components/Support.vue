<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

const faqs = ref([
  "Is Her Capital free to use?",
  "Do I need prior financial knowledge to use HerCapital?",
  "What makes Her Capital different from other financial websites?"
])

const active = ref(null);

function flash(i) {
  active.value = i;
  setTimeout(() => {
    active.value = null;
  }, 150);
}
</script>

<template>
  <div class="support-wrapper">

    <Header />

    <div class="page-container">

      <section class="support-top">
        <h1>Need Support? We’re Here For You</h1>

        <p class="support-desc">
          At Her Capital, we know that learning about money can feel overwhelming 
          but you don’t have to do it alone. Our support team is here to answer 
          your questions with patience and respect, no matter how big or small 
          they seem. Whether you’re exploring our tools for the first time or 
          looking for deeper financial guidance, we’ll help you find clarity 
          and confidence every step of the way.
        </p>

        <h2>How can we help?</h2>

        <div class="search-container">
          <div class="search-box">
            <div class="search-icon"></div>
            <input class="search-input" type="text" />
          </div>
        </div>
      </section>

      <section class="faq-container">
        <div class="faq-item" :class="{ active: active === 0 }" @click="flash(0)">
          <span class="plus">+</span>
          <span class="faq-text">Is Her Capital free to use?</span>
        </div>

        <div class="faq-item" :class="{ active: active === 1 }" @click="flash(1)">
          <span class="plus">+</span>
          <span class="faq-text">Do I need prior financial knowledge to use HerCapital?</span>
        </div>

        <div class="faq-item" :class="{ active: active === 2 }" @click="flash(2)">
          <span class="plus">+</span>
          <span class="faq-text">What makes Her Capital different from other financial websites?</span>
        </div>
      </section>

    </div>

    <Footer />

  </div>
</template>


<style scoped>
.support-wrapper {
  width: 100%;
  background: #f0f0f0;
  font-family: 'Zen Kaku Gothic New', sans-serif;
  display: flex;           
  flex-direction: column;  
  align-items: center;   
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 0 1rem;
}

/* -------------------- TOP SECTION -------------------- */

.support-top {
  text-align: center;
  max-width: 850px;
  margin: 4rem auto 3rem;
}

.support-top h1 {
  font-family: "Jomolhari", serif;
  font-size: 55px;
  font-weight: 400;
  color: #000000;
  letter-spacing: 3%;
  -webkit-text-stroke: 1px #000000; /* optional */
}


.support-desc {
  font-family: "Zen Kaku Gothic New";
  font-size: 25px;
  font-weight: 400;
  color: #000000;
  letter-spacing: 0%;
  line-height: 40px;

  margin: 2.5rem auto; /* centers + gives correct vertical spacing */
  text-align: center;
}


.support-top h2 {
  font-family: "Jomolhari", serif;
  font-size: 55px;
  font-weight: 400;                 /* Regular */
  color: #000000;
  letter-spacing: 3%;
  line-height: normal;              /* Auto in Figma */
  text-align: center;

  -webkit-text-stroke: 1px #000000; /* Stroke: 1px Outside */
  font-smooth: 2em;

  margin-top: 3rem;                 /* keep your spacing */
}


/* -------------------- SEARCH BAR -------------------- */

.search-container {
  display: flex;
  justify-content: center;
  margin-top: 2.2rem;
}

.search-box {
  width: 975px;
  height: 71px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 6px;

  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;

  /* Drop shadow (Figma default shadow) */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.search-icon {
  width: 22px;
  height: 22px;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.search-input {
  border: none;
  width: 100%;
  font-size: 22px;
  outline: none;
}

/* -------------------- FAQ BUTTONS -------------------- */

.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  margin-top: 20px;
}

.faq-item {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 20px 32px;
  background: #A3BBE4;
  border-radius: 15px;
  cursor: pointer;
  width: max-content;
  transition: background 0.12s ease;
}

/* DARK FLASH COLOR */
.faq-item.active {
  background: #465786 !important;
}

.plus {
  color: white;
  font-size: 25px;
}

.faq-text {
  color: white;
  font-size: 18px;
  font-family: "Zen Kaku Gothic New", sans-serif;
  letter-spacing: 0.10em;
  white-space: nowrap;
}
html, body {
  margin: 0;
  padding: 0;
}


</style>


