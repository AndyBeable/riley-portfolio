<template>
  <div class="podcasts">
    <Card :profiles="profiles" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import Raised from "@/assets/raised.jpg";
import Ask from "@/assets/ask.jpg";

export default {
  name: "Podcasts",
  components: {
    Card,
  },
  data() {
    return {
      profiles: [
        {
          title: "The Men Who Raised Us",
          link: "https://podcasts.apple.com/au/podcast/the-men-who-raised-us/id1478050943",
          image: Raised,
        },
        {
          title: "Ask Mens Health",
          link: "https://podcasts.apple.com/au/podcast/ask-mens-health/id1562623995",
          image: Ask,
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
