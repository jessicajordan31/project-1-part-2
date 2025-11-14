<template>
    <!-- Connect Headers -->
     <div class="heading">
        <div class="heading-text">
            <h1>Connect with Her Capital</h1>
            <h2>Build meaningful connections with goal-driven individuals</h2>
        </div>
        <button>Contact Us</button>
     </div>

     <!-- Connect Convo Cards -->
     <div class="connect-convos">
        <h3>Trending Conversations</h3>
        <div class="cards-carousel">
            <div class="fin-lit-card">
                <h3 class="card-title">Financial Literacy</h3>
                <img alt="Financial Literacy Image" src="../assets/connect-financial-literacy.jpg">
                <p>Here’s where to start: join the conversation alongside women eager to learn Financial Literacy 101.</p>  
            </div>
            <div class="goals-card">
                <h3 class="card-title">Setting Goals</h3>
                <img alt="Goals image" src="../assets/connect-setting-goals.jpg">
                <p>Define goals that you can stick to. Read how Her Capital’s Chief Investigator encourages progress with goals.</p>  
            </div>
            <div class="independence-card">
                <h3 class="card-title">Independence</h3>
                <img alt="Independece Image" src="../assets/connect-saving.jpg">
                <p>Are you new to financial independence? You’re not alone. Read these inspiring stories and learn what your next steps should be.</p>  
            </div>
            <div class="saving-card">
                <h3 class="card-title">Saving & Budgeting</h3>  
                <img alt="Saving image" src="../assets/connect-saving.jpg"/>
                <p>Learn how to save smartly by hearing from these 10 women.</p>    
            </div>
            <div class="goals-card">
                <h3 class="card-title">Community</h3>
                <img alt="Community image" src="../assets/connect-community.png"/>
                <p>Meet other women who are empowered using Her Capital.</p>
            </div>
        </div>
     </div>

     <div class="separator">

     </div>

     <!-- Form for contacting Her Capital -->
     <div class="connect-contact">
        <h3>Contact Us</h3>
        <div class="form">
            <form name="contact-form" method="post" action="">
                <div class="mb-3">
                    <label for="fname" class="form-label">First Name</label>
                    <input id="fname" name="FirstName" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="lname" class="form-label">Last Name</label>
                    <input id="lname" name="FirstName" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea name="Message" id="message" class="form-control" rows="3"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
     </div>
</template>