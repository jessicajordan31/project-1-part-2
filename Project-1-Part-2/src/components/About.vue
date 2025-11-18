<script setup>
  import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="container">
        <div id="Who-We-Are" style="text-align: center;">
            <h1 class="title">Who We Are</h1>
            <h3 class="subtitle">Empowered Women. Empowered Finances</h3>
            <img class="about-img1"alt="about-us" src="../assets/about-who-we-are.png" width="350" height="350" />
            <p class="wwa">Creating a place for women to become and feel financially self-sufficient. We help set goals, assist needs, and answer questions. Simple. Encouraging. Independent.</p>
        </div>

        <div  style="text-align: center;">
            <h1 class="title">Our Services</h1>
            <img class="about-img2" alt="about-us" src="../assets/about-our-services.png" width="600" height="400" />
            <p class="os">We are able to advise women through understanding what it means to be financially efficient. We also provide a goal planner that helps those step by step through the processes of getting a loan, obtaining a good credit score, saving for a down payment, or even understanding one’s mortgage.</p>
            <button class="get-started"><p class="paragraph">Get Started</p></button>
        </div>

        <div  style="text-align: center;">
            <h1 class="title">Our Impact</h1>
            <img class="about-img3" alt="about-us" src="../assets/about-our-impact.png" width="400" height="400" />
            <p class="oi">We have helped over 50,000 women become financially independent. Over 18,000 of those women were able to pay off their student loans, 16,000 were able to pay off their mortgage, and the other 16,000 were able to gain good credit scores.</p>
        </div>
    </div>
    <Footer />
</template>

<style>
    .get-started{
        background-color: #465786;
        width: 200px;
        height: 60px;
        border-radius: 10px; 
        margin-top: 20px;
        
        
    }
    .container{
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 20px;
        width: 100%;
    }
    body {
        margin: 0;
        overflow-x: hidden;
        background-color: #f0f0f0;
        
    }
    .title{
        font-family: "Jomolhari", serif;
        font-size: 80px;
        color: #000;
        font-weight: 510;
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .subtitle{
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 30px;
        color: #000; 
        font-weight: 500;  
        margin-bottom: 20px; 
    }
    .wwa{
        justify-content: center;
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 22px;
        margin: 100px;
        line-height: 50px;
    }
    
    .about-img1{
        float: left;
        border-radius: 15px;
        border: #465786 5px solid;
        margin: 50px;
    }
    .about-img2{
        border-radius: 15px;
        border: #465786 5px solid;
        margin-bottom: .5px;
    }
    .os{
        justify-content: center;
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 22px;
        margin: 10px;
        line-height: 50px;
    }
     /* .title2{
        font-family: "Jomolhari", serif;
        font-size: 80px;
        color: #000;
        font-weight: 510;
        margin-bottom: 20px;
        margin-top: 15px;
    } */

     .about-img3{
        float: right;
        border-radius: 15px;
        border: #465786 5px solid;
        margin: 50px;
    }
    
    .oi{
        justify-content: center;
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 22px;
        margin: 100px;
        line-height: 50px;
    }

</style>