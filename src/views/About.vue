<template>
  <div class="about">
    <p>
      Christopher is a British-American writer and editor based in Sydney.
      Formerly deputy editor of GQ Australia, Christopher has worked on staff at
      Men’s Health, and appeared in <em>Harper’s Bazaar</em> ,
      <em>Vogue Australia</em> and<em
        >T Australia: The New York Times Style Magazine</em
      >, where he worked as a columnist. His first book will be published by
      Penguin Ra ndom House Australia in October 2022.
    </p>
    <p>
      His work includes writing and editing profiles and in-depth magazine
      features discussing trends in popular culture; producing podcasts on
      everything from masculinity to health; directing both editorial and
      commercial fashion shoots on time and to budget; helping artists devise
      press runs to support new releases; and producing engaging copywriting
      content for a range of brands.
    </p>
    <div class="social__links">
      <a
        href="https://www.linkedin.com/in/christopher-riley-47a55180/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/yeayea.nah/" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a href="mailto:christopherriley87@gmail.com" target="_blank">
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
.about {
  width: 75%;
  margin: 0 auto;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 3rem;
  }

  .social__links {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;

    & a {
      margin-right: 1.2rem;
    }
  }
}
</style>
