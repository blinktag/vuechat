<template>
  <ul class="controls">
    <li class="controls__item">
      <a href="" class="controls__link">Mute me</a>
    </li>
    <li class="controls__item">
      <a href="" class="controls__link">Pause video</a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.controls {
  position: fixed;
  width: 100%;
  bottom: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  background-color: #2B9CF2;
  list-style-type: none;

  &__item {
    flex: 1;
    font-weight: 600;
    border-right: 1px solid #0E83DC;
  }

  &__link {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 15px 18px;
    height: 100%;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: #0E83DC;
    }
  }
}
</style>
