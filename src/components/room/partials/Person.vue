<template>
      <div class="person">
        <div class="person__video">
          <video ref="person"></video>
        </div>
        <div class="person__name">
          {{ client.peer.nick }}
        </div>
      </div>
</template>

<script>
export default {
  props: {
    client: Object
  },
  mounted () {
    this.refs.person.appendChild(this.client.video)
  }
}
</script>
