<template>
  <Article />
  <Aside />
  <Main />
</template>

<script>
import Article from "@/components/Article.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";

export default {
  components: {
    Article,
    Aside,
    Main,
  },
};
</script>
