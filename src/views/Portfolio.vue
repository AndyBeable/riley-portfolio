<template>
  <div class="portfolio">
    <div class="portfolio__tile">
      <div class="portfolio__title">
        <h2>Magazines</h2>
      </div>
    </div>
    <div class="portfolio__tile">
      <div class="portfolio__title">
        <h2>Podcasts</h2>
      </div>
    </div>
    <div class="portfolio__tile">
      <div class="portfolio__title">
        <h2>Videos</h2>
      </div>
    </div>
    <div class="portfolio__tile">
      <div class="portfolio__title">
        <h2>Creative Direction</h2>
      </div>
    </div>
    <div class="portfolio__tile">
      <div class="portfolio__title">
        <h2>Books</h2>
      </div>
    </div>
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
  padding: 8rem 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 750px) {
    flex-direction: row;
  }

  &__tile {
    padding: 5rem;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  &__title {
    text-transform: uppercase;
  }
}
</style>
