<template>
  <div class="wrapper bg-color-1 xl:px-40">
    <!-- Navbar -->
    <nav class="relative container mx-auto py-12 px-6 text-white">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2 text-xl md:text-3xl lg:text-4xl font-medium">
          Agri-Food Transition Model
        </div>
        <!-- Menu items -->
        <div class="hidden space-x-6 md:flex text-sm">
          <a href="" class="hover:text-gray-200">Partners</a>
          <a href="#more-info" class="hover:text-gray-200">About us</a>
          <div class="items-center">
            <el-dropdown trigger="click">
              <span class="text-white">
                Applications
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Agrifood Transition Model</el-dropdown-item>
                  <el-dropdown-item>Carbon Transition Model</el-dropdown-item>
                  <el-dropdown-item>Energy Transition Model</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
        ></button>
      </div>
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center"
        >
          <a href="" class="hover:text-gray-200">Partners</a>
          <a href="#more-info" class="hover:text-gray-200">About us</a>
        </div>
      </div>
    </nav>

    <!-- Title section  -->
    <section id="title" class="bg-color-1 text-white">
      <!-- flex container  -->
      <div
        class="container flex flex-col items-center px-6 mx-auto mt-10 space-y-0 md:flex-row"
      >
        <!-- Left item  -->
        <div class="flex flex-col mb-28 space-y-6 md:w-3/5">
          <h1 class="max-w-xl text-4xl font-thin text-left md:text-5xl">
            Explore the Future
          </h1>
          <p class="max-w-lg text-left">
            The Agri-food-nature Transition Model (ATM) is a tool that allows
            the user to explore different pathways to bring the agri-food-nature
            system into an ecologically, economically, and socially acceptable
            balance that can be maintained in the long term.
          </p>
          <button
            class="bg-white text-color-1 rounded-lg self-baseline px-3 py-3 hover:rounded-full"
          >
            Open Agri-Food Transition Model
          </button>
        </div>
        <!-- Image  -->
        <div class="flex flex-row-reverse md:w-2/5 self-start">
          <img
            class="hidden md:flex md:w-72 lg:w-80"
            src="@/assets/images/leafEarth.png"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>

  <!-- Features section  -->
  <section id="features" class="text-color-1 bg-white text-center xl:px-32">
    <!-- Flex container  -->
    <div
      class="container flex flex-col mx-auto px-6 mt-10 md:space-x-6 md:flex-row"
    >
      <div
        v-for="feature in features"
        :key="feature.header"
        class="flex flex-col items-center p-6 md:w-1/3"
      >
        <font-awesome-icon
          :icon="feature.icon"
          class="text-5xl"
        ></font-awesome-icon>
        <h4>{{ feature.header }}</h4>
        <p class="max-w-sm">{{ feature.text }}</p>
      </div>
    </div>
  </section>
  <section id="partners" class="bg-white text-center items-center">
    <div class="container flex flex-col mx-auto lg:px-20">
      <h1 class="text-color-1 text-5xl">Partners</h1>
      <ul>
        <li><img src="@/assets/images/landingpage/agrifirm.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/avebe.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/blonk.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/campina.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/cosun.png" alt="" /></li>
        <li><img src="@/assets/images/landingpage/ispt.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/kalavasta.png" alt="" /></li>
        <li><img src="@/assets/images/landingpage/ltonl.png" alt="" /></li>
        <li>
          <img src="@/assets/images/landingpage/meststoffennl.jpeg" alt="" />
        </li>
        <li>
          <img
            src="@/assets/images/landingpage/provinciegroningen.jpeg"
            alt=""
          />
        </li>
        <li><img src="@/assets/images/landingpage/sanegeest.jpeg" alt="" /></li>
        <li><img src="@/assets/images/landingpage/urgenda.jpeg" alt="" /></li>
      </ul>
    </div>
  </section>
  <section id="more-info" class="bg-color-1 text-white pt-24">
    <div class="container flex flex-row mx-auto lg:px-20">
      <el-carousel
        arrow="always"
        :autoplay="false"
        indicator-position="outside"
        class="grow"
      >
        <el-carousel-item
          v-for="card in cards"
          :key="card.title"
          class="px-12 pb-20 md:px-20 lg:px-32"
        >
          <font-awesome-icon
            :icon="card.icon"
            class="text-3xl flex items-start mb-2"
          ></font-awesome-icon>

          <h3 class="text-2xl mb-2">
            <a :href="card.url" class="hover:text-color-3">
              {{ card.title }}
            </a>
          </h3>

          <p class="w-5/6 md:w-3/4 lg:w-2/3">{{ card.text }}</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
  <div id="footer" class="text-center bg-color-1 py-20 text-white">
    <p>© Copyright 2022 Kalavasta</p>
  </div>
</template>

<script>
import { ElCarousel } from "element-plus";
import { ElCarouselItem } from "element-plus";
import { ElDropdownMenu } from "element-plus";
import { ElDropdownItem } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
export default {
  components: {
    ElCarousel,
    ElCarouselItem,
    ElDropdownItem,
    ElDropdownMenu,
    ArrowDown,
  },
  data() {
    return {
      cards: [
        {
          title: "About us",
          text: ` Kalavasta is a strategy consultancy which aims to uncover and
                      advance transitions to sustainable equilibria. The Agri-food-nature
                      Transition Model (ATM) is developed by Kalavasta in cooperation with
                      the Institute of Sustainable Process Technology (ISPT) on request of
                      a consortium of companies from the industry, NGO's, knowledge
                      partners and agricultural cooperatives.`,
          url: "https://kalavasta.com/",
          icon: "people-group",
        },
        {
          title: "Carbon Transition Model",
          text: ` The Carbon Transition Model (CTM) is a tool to explore pathways to
                      zero emissions for the currently fossil intensive industries as well
                      as new industries that produce recycled, biogenic and synthetic
                      molecules (from carbon, water and green electricity) in the future.`,
          url: "https://carbontransitionmodel.com/",
          icon: "gears",
        },
        {
          title: "Energy Transition Model",
          text: `The Energy Transition Model is an independent, comprehensive and
                      fact-based energy model made by Quintel Intelligence that is used by
                      governments, corporations, NGOs and educators in various countries.
                      It is backed by more than twenty partners.`,
          url: "https://energytransitionmodel.com/",
          icon: "bolt",
        },
      ],
      features: [
        {
          header: "Transparant",
          text: "Created from open data and free to use",
          icon: "book-open",
        },
        {
          header: "Validated",
          text: `Developed in collaboration with a consortium from both academic and
                      practical fields`,
          icon: "circle-check",
        },
        {
          header: "Integral",
          text: `Spanning agricultural production, processing and food consumption,
                      including trade`,
          icon: "puzzle-piece",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Feature Styling */

#features {
  @apply mt-20 pb-20;
}
#features p {
  @apply text-color-1 mt-3 lg:px-5;
}

#features h4 {
  @apply font-light mt-4 text-2xl;
}

.el-dropdown svg {
  @apply pt-1;
}

#partners img {
  @apply w-24 h-9 mx-3;
}
</style>
