<template>
  <header class="header">
    <div class="container">
      <div class="header__navigation">
        <NuxtLink class="header__logo" to="/">Блог</NuxtLink>

        <div>
          <div class="header__burger" :class="isShowMobileMenu ? 'header__burger_active' : ''" @click="toggleBurgerMenu">
            <span></span>
          </div>

          <nav class="menu__body" :class="isShowMobileMenu ? 'menu__body_active' : ''">

            <ul class="menu__list">
              <li
                v-for="navigationLink in navigationList"
                :key="navigationLink.title"
                @click="clickToLink"
              >
                <nuxt-link
                  class="menu__link"
                  active-class="menu__link_active"
                  :to="navigationLink.to"
                >{{ navigationLink.title }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

  const navigationList = ref([
    {
      title: 'Главная',
      to: {
        name: '',
      },
    },
  ]);

  const isShowMobileMenu = ref(false);

  const toggleBurgerMenu = () => {
    document.body.classList.toggle("body_lock");
    isShowMobileMenu.value = !isShowMobileMenu.value;
  };

  const clickToLink = () => {
    if(isShowMobileMenu.value) {
      toggleBurgerMenu();
    }
  }

</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: $bg-primary;
  color: $font-white;
  min-height: 80px;
}
.header__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.header__logo {
  @include font(32px, 700, 1.2);
  color: $font-white;
  text-decoration: none;
  z-index: 5;
}

.header__burger {
  display: none;
}
.menu__list {
  list-style: none;
  display: flex;
  gap: 15px;
  flex: 1 0 auto;
  padding: 0;
  margin: 0;
}
.menu__link {
  @include font(20px, 500, 29px);
  text-decoration: none;
  color: $font-white;
  transition: all 0.3s ease 0s;
}

.menu__link:hover {
  color: $font-white-hover;
}

@media (max-width: 767px) {
  .header__burger {
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
  }
  .header__burger span,
  .header__burger::before,
  .header__burger::after {
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: $bg-white;
  }
  .header__burger::before,
  .header__burger::after {
    content: '';
  }
  .header__burger::before {
    top: 0;
  }
  .header__burger::after {
    bottom: 0;
  }
  .header__burger span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }

  .header__burger .header__burger_active span{
    transform: scale(0) translate(0px, -50%);
  }
  .header__burger .header__burger_active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
  }
  .header__burger .header__burger_active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
  }

  .menu__body {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 100px 30px 30px 30px;
    transition: left 0.3 ease 0s;
    overflow: auto;
    margin-top: 30px;
  }
  .menu__body.menu__body_active {
    left: 0;
  }

  .menu__body::before {
    content: '';
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 80px;
    background-color: $bg-primary;
    z-index: 5;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 30%);
  }
  .menu__list {
    flex-direction: column;
  }

  .menu__link {
    @include font(25px, 500, 29px);
    color: $font-white;
  }
}
</style>
