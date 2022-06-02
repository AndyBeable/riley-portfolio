<template>
  <div class="portfolio">
    <!--    <h1>Portfolio</h1>-->
    <Card :profiles="profiles" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import June from "../assets/june.jpg";
import March from "../assets/march.jpg";
import January from "../assets/january.jpg";

export default {
  name: "Portfolio",
  components: {
    Card,
  },
  data() {
    return {
      category: ["Magazine", "Podcasts", "Creative direction", "Books"],
      profiles: [
        {
          title: "Mens Health, June 2021 issue",
          link: "https://www.menshealth.com.au/how-to-dress-for-confusing-weather/",
          image: June,
        },
        {
          title: "Mens Health, March 2021 issue",
          link: " https://www.menshealth.com.au/you-need-these-street-inspired-clothes-in-your-closet/",
          image: March,
        },
        {
          title: "Mens Health, January 2022 issue",
          link: "https://www.menshealth.com.au/summer-style-inspiration-for-men-2022/",
          image: January,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 7rem 0;
  width: 80%;
  margin: 0 auto;
}
</style>
