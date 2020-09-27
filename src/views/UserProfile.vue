<template>
  <div class="user_profile">
   <nav class="panel">
     <img :src="state.user.img" class="profile_img_header" />
     <p class="subtitle"><strong>Followers: </strong> {{ state.followers }}</p>
     <p class="panel-heading">{{ state.user.username }}</p>
     <p class="panel-heading" v-if="state.user.isAdmiin">
       Admin
      </p>
     <div class="panel-block">
       <CreatePinPanel @add-pin="addPin" />
     </div>
    </nav>

  <div class="user-profile__pin-wrapper">
      <PinItem v-for="pin in state.user.pins" :key="pin.id"
               :username="state.user.username" :pin="pin" @click="deletePin" />
  </div>
  
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { users } from "../assets/users"
import CreatePinPanel from '@/components/CreatePinPanel'
import PinItem from '@/components/PinItem'

export default {
  name: 'UserProfile',
  components: { CreatePinPanel, PinItem },
  setup(props) {
    const { pin } = props
    const route = useRoute()
    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[0]
    })

    function addPin(pin) {
        state.user.pins.unshift({ id: state.user.pins.length + 1, content: pin })
    }

    function deletePin(pin) {
      state.user.pins.splice(pin, 1)
    }

    return {
      state,
      addPin,
      userId
    }
  }
}
</script>

<style scoped>
.user_profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;
}
.profile_img_header {
  border-radius: 8px;
  max-height: 100px;
}
.profile_img_header, .subtitle {
  margin-left: 2%;
  margin-top: 2%;
}
</style>