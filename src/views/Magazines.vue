<template>
  <div class="magazines features">
    <div class="features__header">
      <h2>Magazines</h2>
    </div>
    <Card :profiles="profiles" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Winston from "@/assets/winston.jpg";
import Melo from "@/assets/melo.jpg";
import Ruel from "@/assets/ruel.jpg";
import YP from "@/assets/yp.jpg";
import NWA from "@/assets/one-four-nwa.jpg";
import Onefour from "@/assets/one-four-return.jpg";
import esports from "@/assets/esports.jpg";
import Metaverse from "@/assets/metaverse.jpg";
import Fashion from "@/assets/fashion-week.jpg";
import Mullet from "@/assets/mullet.jpg";
import Hairline from "@/assets/hairline.jpg";
import Humbug from "@/assets/humbug.jpg";
import MasterChef from "@/assets/masterchef.jpg";
import Jewellery from "@/assets/jewellery.jpg";
import Gillette from "@/assets/gilette.jpg";
import Ugg from "@/assets/ugg.jpg";
import Melrose from "@/assets/melrose.jpg";

export default {
  name: "Magazines",
  components: {
    Card,
  },
  data() {
    return {
      profiles: [
        {
          title: "Winston Duke",
          link: "https://www.gq.com.au/men-of-the-year/event-coverage/winston-duke-is-2019s-gq-australia-actor-of-the-year/news-story/ed52281e7687a35d6fe99993a3b494f7",
          image: Winston,
        },
        {
          title: "LaMelo Ball",
          link: "https://www.gq.com.au/fitness/sport/one-of-a-kind-the-unstoppable-rise-of-lamelo-ball/image-gallery/7ae08aa886a80abcdb4ac4b8e3327dae",
          image: Melo,
        },
        {
          title: "Manu Crook$",
          link: "https://www.gq.com.au/entertainment/music/manu-crooks-is-ready-to-seize-his-moment/image-gallery/2c422517226191e6248dcdd154aa321e",
          image: Winston,
        },
        {
          title: "Ruel",
          link: "https://www.gq.com.au/entertainment/music/no-longer-a-talent-on-the-rise-ruel-is-cementing-himself-as-one-of-australias-bona-fide-superstars/image-gallery/b6f08f283d864893c3ed4422fff07287",
          image: Ruel,
        },
        {
          title: "ONEFOURs YP",
          link: "https://www.menshealth.com.au/how-onefour-rapper-yp-transformed-his-body-and-mind/",
          image: YP,
        },
        {
          title: "Australias NWA",
          link: "https://www.gq.com.au/entertainment/music/australias-nwa-the-journey-of-onefour-so-far/news-story/5152c8b983bf84673a0d12af567b2099",
          image: NWA,
        },
        {
          title: "The Return of ONEFOUR",
          link: "https://www.gq.com.au/entertainment/music/onefour-discuss-their-debut-ep-working-with-the-kid-laroi-and-proving-the-doubters-wrong/image-gallery/41b27b7f5663836cdf3053a762d222a8",
          image: Onefour,
        },
        {
          title: "The world of e-sports",
          link: "https://www.gq.com.au/fitness/sport/press-play-how-gaming-went-from-a-bedroom-hobby-to-a-billiondollar-industry/image-gallery/d1f66e7f3719d8ef07fd15345b5030b6",
          image: esports,
        },
        {
          title: "Fashion in the metaverse",
          link: "https://harpersbazaar.com.au/fashion-metaverse/",
          image: Metaverse,
        },
        {
          title: "Raps first rockstar-athlete",
          link: "https://www.gq.com.au/entertainment/music/saint-jhn-is-hiphops-first-rockstar-athlete-treat-me-like-lebron/image-gallery/341688bdf5d7a42704719a533892e580",
          image: YP,
        },
        {
          title: "Trying Wim Hof for the day",
          link: "https://www.gq.com.au/fitness/health-nutrition/ice-baths-immunity-and-inner-peacegq-roadtests-the-wim-hof-method/news-story/01e51d60cd75ae4973d16c3ec9abcdc3",
          image: YP,
        },
        {
          title: "Attending fashion week in disguise",
          link: "https://www.gq.com.au/style/news/road-test-i-dressed-as-an-influencer-to-fashion-week-and-heres-what-happened/news-story/09166b767ed73930b35bada497b146d9",
          image: Fashion,
        },
        {
          title: "Most influential men in health",
          link: "https://www.menshealth.com.au/the-26-most-influential-men-in-health-and-fitness/",
          image: YP,
        },
        {
          title: "Protecting the mullet",
          link: "https://taustralia.com.au/why-we-must-protect-the-mullet-at-all-costs/",
          image: Mullet,
        },
        {
          title: "Me and my hairline",
          link: "https://taustralia.com.au/how-to-tackle-a-receding-hairline-and-baldy-go-no-longer/",
          image: Hairline,
        },
        {
          title: "Humbug no more",
          link: "https://taustralia.com.au/its-beginning-to-look-a-lot-like/",
          image: Humbug,
        },
        {
          title: "My MasterChef makeover",
          link: "https://taustralia.com.au/how-masterchef-inspired-a-not-so-complete-makeover/",
          image: MasterChef,
        },
        {
          title: "Embracing fine jewellery",
          link: "https://taustralia.com.au/why-dont-more-men-embrace-fine-jewellery/",
          image: Jewellery,
        },
        {
          title: "Gillette",
          link: "https://taustralia.com.au/why-dont-more-men-embrace-fine-jewellery/",
          image: Gillette,
        },
        {
          title: "Ugg",
          link: "https://www.gq.com.au/style/best-buys/road-test-this-is-what-happens-when-you-let-a-gq-editor-wear-pvccovered-ugg-boots/news-story/088e5a7e17ee8dca51077ff76d9a5a89?amp",
          image: Ugg,
        },
        {
          title: "Melrose",
          link: "https://www.menshealth.com.au/tried-and-tested-2-mh-editors-put-melrose-mct-oil-to-trial/",
          image: Melrose,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
