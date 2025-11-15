<!-- jess to do: fix horizontal scroll on cards -->

<template>
    <!-- Connect Headers -->
     <div class="heading">
        <div class="heading-text">
            <h1>Connect with Her Capital</h1>
            <h2>Build meaningful connections with goal-driven individuals</h2>
            <button class="btn-w">Contact Us</button>
        </div>
     </div>

     <!-- Connect Convo Cards -->
     <div class="connect-convos">
        <h4>Trending Conversations</h4>
        <div class="scroll">
            <div class="cards-carousel">
                <div class="card">
                    <h3 class="card-title" id="yellow">Financial Literacy</h3>
                    <img alt="Financial Literacy Image" src="../assets/connect-financial-litercy.jpg" width="348px" height="210">
                    <p>Here’s where to start: join the conversation alongside women eager to learn Financial Literacy 101.</p>  
                </div>
                <div class="card">
                    <h3 class="card-title" id="blue">Setting Goals</h3>
                    <img alt="Goals image" src="../assets/connect-setting-goals.jpg" width="348px" height="210">
                    <p>Define goals that you can stick to. Read how Her Capital’s Chief Investigator encourages progress with goals.</p>  
                </div>
                <div class="card">
                    <h3 class="card-title" id="yellow">Independence</h3>
                    <img alt="Independece Image" src="../assets/connect-independence.jpg" width="347px" height="210">
                    <p>Are you new to financial independence? You’re not alone. Read these inspiring stories and learn what your next steps should be.</p>  
                </div>
                <div class="card">
                    <h3 class="card-title" id="blue">Saving & Budgeting</h3>  
                    <img alt="Saving image" src="../assets/connect-saving.jpg" width="347px" height="210"/>
                    <p>Learn how to save smartly by hearing from these 10 women.</p>    
                </div>
                <div class="card" id="community-card">
                    <h3 class="card-title" id="yellow">Community</h3>
                    <img alt="Community image" src="../assets/connect-community.png" width="346px" height="210"/>
                    <p>Meet other women who are empowered using Her Capital.</p>
                </div>
            </div>
        </div>
     </div><br><br>

     <div class="separator">
        <div class="bar" id="blue-bar"></div>
        <div class="bar" id="light-blue-bar"></div>
        <div class="bar" id="yellow-bar"></div>
        <div class="bar" id="light-blue-bar"></div>
        <div class="bar" id="blue-bar"></div>
     </div><br><br>

     <!-- Form for contacting Her Capital -->
     <div class="connect-contact">
        <h4>Contact Us</h4><br><br><br>
        <div class="form-box">
            <div class="form">
                <form name="contact-form" method="post" action="">
                    <div class="names-row">
                        <div class="mb-3">
                            <label for="fname" class="form-label">First Name</label>
                            <input id="fname" name="FirstName" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="lname" class="form-label">Last Name</label>
                            <input id="lname" name="FirstName" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="Email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea name="Message" id="message" class="form-control" rows="5"></textarea>
                    </div>
                    <button class="btn-w submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        
     </div>
</template>

<style>
    body{
        margin: 0;
        overflow-x: hidden;
    }
    h1{
        font-family: "Jomolhari", serif;
        font-size: 80px;
        color: #000;
        font-weight: 510;
    }
    h2, h3{
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 35px;
        color: #000;
    }
    h4{
        font-size: 30px;
        font-family: "Zen Kaku Gothic New", sans-serif;
        color: #000;
        padding: 0 3rem;
    }
    p{
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 18px;
        padding: 10px;
        padding-top: 20px;
    }
    .heading{
        padding: 10px;
        width: 100%;
        margin: 0 0 7rem;
        align-items: center;
    }
    .heading-text{
        width: 100%;
        max-width: 1200px;
        text-align: center;
    }
    .btn-w{
        background-color: #fff;
        stroke: 1px solid #465786;
        border-radius: 8px;
        padding: 10px 10px 10px 10px;
        color: #000;
        font-size: 20px;
        margin-top: 30px;
    }
    .btn-w:hover{
        color: #fff;
        background-color: #465786;
        transition: 0.2s;
    }
    .connect-convos{
        margin: 0 0 3rem;
        padding: 0;
    }
    .cards-carousel{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 2rem 3rem;
        gap: 70px;
        min-width: min-content;
    }
    .card{
        box-shadow: 5px 10px 20px #505050;
        border: 1px solid #000;
        background-color: #fff;
        border-radius: 40px;
        width: 350px;
        height: 450px;
        text-align: center;
        margin: 0;
        flex-shrink: 0;
        min-width: 350px;
    }
    #community-card{
        margin-right: 300px;
    }
    .card:hover{
        box-shadow: 10px 18px 25px #656565;
        transition: .3s;
    }
    .scroll{
        width: 100vw;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        /* margin-left: calc(-50vw + 50%) */
    }
    .card-title{
        font-family: "Jomolhari", serif;
        font-size: 30px;
        padding: 15px;
    }
    #yellow{
        background-color: #FFFCC0;
        border-radius: 40px 40px 0px 0px;
        border-bottom: 1px solid #000;
    }
    #blue{
        background-color: #A3BBE4;
        border-radius: 40px 40px 0px 0px;
        border-bottom: 1px solid #000;
    }
    img{
        border-bottom: 1px solid #000;
    }
    .separator{
        left: -14.9%;
        width: 100vw;
        position: relative;
        transform: translateX(-50);
        padding: 0;
        box-sizing: border-box;
        margin: 2rem 0;
    }
    .bar{
        display: block;
        width: 100%;
        margin: 1rem 0 2rem;
    }
    #blue-bar{
        border: 12px solid #465786;
    }
    #light-blue-bar{
        border: 8px solid #A3BBE4;
    }
    #yellow-bar{
        border: 6px solid #FFFCC0;
    }
    .connect-contact{
        padding: 0 3rem 4rem;
    }
    .form-box{
        max-width: 700px;
        padding: 2.5rem 3rem;
        margin-left: 250px;
        box-shadow: 5px 10px 23px #505050;
        border: 3px solid #A3BBE4;
        background-color: #fff;
        border-radius: 15px;
    }
    .names-row {
        display: flex;
        gap: 1.5rem;
    }
    .mb-3{
        margin-bottom: 1.5rem;
        flex: 1; 
    }
    .form-label {
        display: block;
        margin-bottom: 0.35rem;
        font-size: 16px;
    }
    .form-control {
        width: 100%;
        padding: 0.6rem 0.75rem;
        border-radius: 6px;
        border: 1px solid #b7b7b7;
        font-size: 16px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }
    textarea.form-control {
        min-height: 160px;
        resize: vertical;
    }
    .btn-w.submit-btn {
        padding: 0.6rem 0.75rem;
        margin: 1.5rem auto 0;
    }
</style>