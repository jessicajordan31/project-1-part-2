<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <Header />

  <section class="support-container">
    <h1 class="support-heading">Need Support? We’re Here For You</h1>

    <p class="support-desc">
      At Her Capital, we know that learning about money can feel overwhelming
      but you don’t have to do it alone. Our support team is here to answer
      your questions with patience and respect, no matter how big or small
      they seem. Whether you’re exploring our tools for the first time or
      looking for deeper financial guidance, we’ll help you find clarity and
      confidence every step of the way.
    </p>

    <h2 class="support-subheading">How can we help?</h2>

    <div class="search-box">
      <input type="text" placeholder="Search..." />
    </div>

    <div class="faq-buttons">
      <button>Is Her Capital free to use?</button>
      <button>Do I need prior financial knowledge to use HerCapital?</button>
      <button>
        What makes Her Capital different from other financial websites?
      </button>
    </div>
  </section>

  <Footer />
</template>

<style scoped>
.support-container {
  padding: 4rem 2rem;
  text-align: center;
}

.support-heading {
  font-family: "Jomolhari", serif;
  font-size: 36px;
  margin-bottom: 1rem;
}

.support-desc {
  max-width: 850px;
  margin: 0 auto 3rem;
  font-size: 18px;
  line-height: 1.6;
}

.support-subheading {
  font-family: "Jomolhari", serif;
  font-size: 32px;
  margin-bottom: 1.2rem;
}

.search-box input {
  width: 70%;
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
}

.faq-buttons button {
  display: block;
  margin: 1rem auto;
  padding: 0.9rem 1.5rem;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #A3BBE4;
  background: #F5F8FF;
  cursor: pointer;
}

.faq-buttons button:hover {
  background: #A3BBE4;
  color: #fff;
}
</style>
