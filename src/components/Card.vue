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
      justify-content: space-around;
      gap: 5rem;
    }

    & li {

    }
  }
}

.content__container {
  text-align: center;
  text-transform: uppercase;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem;

  & img {
    width: 400px;
    height: 400px;
    margin-bottom: 1rem;
  }
}
</style>
