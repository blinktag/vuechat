<template>
  <div class="home">
    <form action="#" class="join" @submit.prevent="join">
      <h1>Start Chatting</h1>

      <label form="room" class="label">Room ID</label>
      <input type="text" name="room" class="input" placeholder="Ex: TechChat" v-model.trim="room" />

      <label form="name" class="label">Your name</label>
      <input type="text" name="name" class="input" v-model.trim="name" />

      <button type="submit" class="button button--primary">
        Join Chat
      </button>
    </form>
  </div>
</template>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .join {
    width: 100%;
    max-width: 400px;
  }
</style>

<script>
import { mapMutations } from 'vuex'
import uuid from 'uuid/v4'
import SimpleWebRTC from 'simplewebrtc'

export default {
  name: 'Home',

  data () {
    return {
      room: this.$route.query.room || uuid(),
      name: ''
    }
  },

  methods: {
    ...mapMutations({
      setMyName: 'setMyName'
    }),

    join () {
      if (this.name === '' || this.room === '') {
        return
      }

      this.setMyName(this.name)

      window.webrtc = new SimpleWebRTC({
        localVideoEl: '',
        remoteVideosEl: '',
        autoRequestMedia: true,
        nick: this.name
      })

      this.$router.push({
        name: 'room',
        params: {
          room: this.room
        }
      })
    }
  }
}
</script>
