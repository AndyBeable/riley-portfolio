<template>
  <div class="portfolio">
    <router-link :to="{ name: 'Magazines' }">
      <div class="portfolio__tile">
        <div class="portfolio__title">
          <h2>Magazines</h2>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Podcasts' }">
      <div class="portfolio__tile">
        <div class="portfolio__title">
          <h2>Podcasts</h2>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Videos' }">
      <div class="portfolio__tile">
        <div class="portfolio__title">
          <h2>Videos</h2>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Creative' }">
      <div class="portfolio__tile">
        <div class="portfolio__title">
          <h2>Creative Direction</h2>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'Books' }">
      <div class="portfolio__tile">
        <div class="portfolio__title">
          <h2>Books</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 10rem 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (min-width: 750px) {
      flex-wrap: wrap;

    }
  }

  &__tile:hover {
   transform: scale(1.1);
    transition: .5s ease all;
  }

  &__title {
    text-transform: uppercase;
  }
}
</style>
