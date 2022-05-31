<template>
  <div class="card__container">
    <ul>
      <li v-for="profile in profiles" :key="profile.title">
        <a :href="profile.link" target="_blank">
          <div class="content__container">
            <img :src="profile.image" alt="" />
            <h2>{{ profile.title }}</h2>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["profiles", "features"],
};
</script>

<style lang="scss" scoped>
.card__container {

  & li {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 750px) {
    & ul {
    display: flex;
    flex-direction: row;
      flex-wrap: wrap;
    }
  }
}


.content__container {
  text-align: center;
  text-transform: uppercase;

  & img {
    max-width: 300px;
    height: auto;
    margin-bottom: 1rem;
  }
}
</style>
