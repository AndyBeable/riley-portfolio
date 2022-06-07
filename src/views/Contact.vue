<template>
  <div class="contact">
    <p>
      Christopher is available for a range of editorial and commercial
      opportunities, including:
    </p>
    <ul>
      <li>Commercial copywriting</li>
      <li>Press releases and artist bios</li>
      <li>Shoot production and creative direction</li>
      <li>Editorial commissions</li>
      <li>Podcast hosting and production</li>
    </ul>
    <p>If you wish to collaborate, contact christopherriley87@gmail.com</p>
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

<style lang="scss" scoped>
.contact {
  padding: 4rem 0;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 750px) {

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-bottom: 3rem;
    font-size: 22px;
    text-transform: uppercase;
  }

  p {
    margin: 3rem 0;
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
