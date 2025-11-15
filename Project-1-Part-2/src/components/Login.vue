<template>
    <!-- Form for contacting Her Capital -->
    <div class="login">
        <div class="login-form">
            <h2>Login</h2><br>
            <form name="contact-form" method="post" action="">
                <div class="mb-3">
                    <label for="username" class="form-label">Username or Email</label>
                    <input id="username" name="User or Email" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="pw" class="form-label">Password</label>
                    <input id="pw" name="Password" type="text" class="form-control">
                </div>
                <button class="btn-w submit-btn" type="submit">Login</button>
            </form>
            <div class="end-text">
                <p>Go back to Home page.</p> <!-- add link to home-->
                <div class="bar"></div>
                <p>Not a member? Sign up here.</p> 
            </div><br>
        </div>
    </div>
</template>

<style>
    .login-form{
        width: 525px;
        height: 600px;
        padding: 4rem 6rem;
        margin-left: 250px;
        box-shadow: 5px 10px 23px #505050;
        border: 3px solid #A3BBE4;
        background-color: #fff;
        border-radius: 15px;
    }
    h2{
        font-family: "Jomolhari", serif;
        font-size: 55px;
        color: #000;
        font-weight: 310;
        text-align: center;
    }
    h3{
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 35px;
        color: #000;
    }
    p{
        font-family: "Zen Kaku Gothic New", sans-serif;
        font-size: 15px;
        padding: 10px;
        padding-top: 20px;
    }
    .btn-w{
        background-color: #A3BBE4;
        border-radius: 8px;
        padding: 10px 10px 10px 10px;
        color: #000;
        font-size: 20px;
        margin-top: 30px;
        justify-content: center;
    }
    .btn-w.submit-btn {
        padding: 0.6rem 2rem;
        margin: 1.5rem auto 0;
        display: block;
        text-align: center;
        align-items: center;
    }
    .bar{
        background-color: #000;
        border: 1px solid rgb(56, 56, 56);
        margin: 0.5rem 0;
    }
    .end-text{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    .end-text p{
        margin: 0.25rem 0;
    }
</style>