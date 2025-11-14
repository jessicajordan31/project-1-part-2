<template>
    <!-- Form for contacting Her Capital -->
    <div class="login">
    <h2>Login</h2>
    <div class="login-form">
        <form name="contact-form" method="post" action="">
            <div class="mb-3">
                <label for="username" class="form-label">Username or Email</label>
                <input id="username" name="User or Email" type="text" class="form-control">
            </div>
            <div class="mb-3">
                <label for="pw" class="form-label">Password</label>
                <input id="pw" name="Password" type="text" class="form-control">
            </div>
            <button class="btn btn-primary" type="submit">Login</button>
        </form>
        <p>Go back to Home page.</p> <!-- add link to home-->
        <!-- Add divider -->
        <p>Not a member? Sign up here.</p> 
    </div>
    </div>
</template>