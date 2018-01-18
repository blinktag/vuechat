<template>
  <div class="home">
    <form action="#" class="join">
      <h1>Start Chatting</h1>

      <label form="room" class="label">Room ID</label>
      <input type="text" name="room" class="input" placeholer="Ex: TechChat" />

      <label form="name" class="label">Your name</label>
      <input type="text" name="name" class="input" />

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

export default {
  name: 'Home',

  data () {
    return {

    }
  }
}
</script>
