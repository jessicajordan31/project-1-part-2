<template>
  <div class="outer">
    <header class="header">
      <div class="logo-img">
        <img alt="HC logo" class="logo" src="../assets/Her Capital.png" width="200" height="125" />
      </div>

      <div class="header-text">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/connect" class="nav-link">Connect</router-link>
        <router-link to="/support" class="nav-link">Support</router-link>

        <button class="login-btn">
            <router-link to="/login" id="login">Login</router-link>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.outer {
    width: 100%;
    margin-left: 50%;
    margin-top: 0;
    background-color: #465786;
    /* transform: translateX(-50%); */
    padding: 1rem 0;
    box-sizing: border-box;
}

.header {
  background-color: #465786;
  color: #fff;
  width: 100%;
  font-family: "Zen Kaku Gothic New", sans-serif;
  padding: 1.5rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.logo-img {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: auto;
  margin-left: 15px;
}

.header-text {
  display: flex;
  align-items: center;
  gap: 4rem;
  font-size: 1.8rem;
}

#login{
    color: #465786;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  position: relative;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.2rem;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
}


.login-btn {
  margin-left: 2rem;
  padding: 1.3rem 4.2rem;
  border-radius: 999px;
  font-size: 28px;
  text-decoration: none;
  border: none;
  background-color: #A3BBE4; 
  color: #465786;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn .nav-link .login-link{
  color: #28324f; 
  text-decoration: none;
  text-align: center;
  font-size: 30px;
  display: block;
}
</style>
