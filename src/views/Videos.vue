<template>
  <div class="videos">
    <Card :profiles="profiles" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import Home1 from "@/assets/mh-1.jpg";
import Home2 from "@/assets/mh-2.jpg";
import Home3 from "@/assets/mh-3.jpg";
import Basquait from "@/assets/basquiat.jpg";
import Gucci from "@/assets/gucci.jpg";
import Ideas from "@/assets/ideas.jpg";

export default {
  name: "Podcasts",
  components: {
    Card,
  },
  data() {
    return {
      profiles: [
        {
          title: "At Home with Mens Health, ep1",
          link: "https://podcasts.apple.com/au/podcast/ask-mens-health/id1562623995",
          image: Home1,
        },
        {
          title: "At Home with Mens Health, ep2",
          link: "https://podcasts.apple.com/au/podcast/ask-mens-health/id1562623995",
          image: Home2,
        },
        {
          title: "At Home with Mens Health, ep3",
          link: "https://podcasts.apple.com/au/podcast/ask-mens-health/id1562623995",
          image: Home3,
        },
        {
          title: "How to style Coachs Basquiat collection",
          link: "https://www.facebook.com/VogueAustralia/videos/397296911282585/",
          image: Basquait,
        },
        {
          title: "Getting ready for Gucci",
          link: "https://youtu.be/iQIUJfCoTSI",
          image: Gucci,
        },
        {
          title: "GQ Big Ideas Summit",
          link: "https://youtu.be/452zgRyAm-0",
          image: Ideas,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.videos {
  padding: 7rem 0;
  width: 80%;
  margin: 0 auto;
}
</style>
