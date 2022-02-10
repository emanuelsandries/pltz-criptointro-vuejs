
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "Bitcoin",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
    }
  }
});

app.mount("#app");
