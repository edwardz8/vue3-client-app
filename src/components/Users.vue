<template>
<div class="container">
<div class="top-header-container">
      <h1 class="title">
        Welcome to Pinfan
      </h1>
      <p class="subtitle">
        Made with Vue3 and <strong>Bulma</strong>!
      </p>
</div>

<div class="user-list">
<router-link v-for="user in users" :key="user.id" :to="{ name: 'UserProfile', params: { userId: user.id } }">
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="user.img_header" alt="profile_img">
    </figure>
  </div>

  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="user.img" class="pro_img" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ user.firstName }}</p>
        <p class="subtitle is-6">{{ user.username }}</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>

</div>
</router-link>
</div>

</div>
      
   
</template>

<script>
import { users } from '../assets/users'

export default {
  name: 'Users',
  setup() {
    return {
      users
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-header-container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.card {
  max-width: 300px;
  margin: 1rem;
}
.user-list {
  display: flex;
  flex-wrap: wrap;
}
.pro_img {
  border-radius: 4px;
}
</style>
