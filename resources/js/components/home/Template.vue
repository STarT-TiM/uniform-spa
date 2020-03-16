<template>
  <section class="templates">
    <h2 class="u-bar fnt-hd" id="mauthietke">Mẫu thiết kế</h2>
    <ul class="templates">
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/sports.png" alt="sports t-shirt design ideas" />
          </div>Sports</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/events.png" alt="events t-shirt design ideas" />
          </div>Events</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/greek.png" alt="fraternity and sorority t-shirts" />
          </div>Greek</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/school.png" alt="school shirt design templates" />
          </div>School</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/holidays.png" alt="holiday t-shirt designs" />
          </div>Holiday</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/occupations.png" alt="occupation t-shirt designs" />
          </div>Occupations</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/religion.png" alt="religion t-shirt designs" />
          </div>Religion</a>
      </li>
      <li>
        <a href="#">
          <div>
            <img src="../../../assets/images/templates/cat-sq/vacation.png" alt="vacation t-shirt design ideas" />
          </div>Vacation</a>
      </li>
    </ul>
  </section>
</template>

<script>

  import $ from 'jquery'
  import slickCarousel from 'slick-carousel'

  export default {
    mounted () {
      $("ul.templates").slick({
        infinite: !0,
        centerMode: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 10,
        mobileFirst: !0,
        arrows: !1,
        responsive: [{
          breakpoint: 420,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            touchThreshold: 10,
            centerMode: !0
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            touchThreshold: 10,
            centerMode: !0
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            touchThreshold: 10,
            centerMode: !1,
            arrows: !0
          }
        }]
      })
    }
  }
</script>
