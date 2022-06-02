<template>
  <div class="podcasts features">
    <div class="features__header">
      <h2>Creative Direction</h2>
    </div>
    <Card :profiles="profiles" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import June from "@/assets/june.jpg";
import March from "@/assets/march.jpg";
import January from "@/assets/january.jpg";

export default {
  name: "Podcasts",
  components: {
    Card,
  },
  data() {
    return {
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
.podcasts {
  padding: 7rem 0;
  width: 80%;
  margin: 0 auto;
}
</style>
