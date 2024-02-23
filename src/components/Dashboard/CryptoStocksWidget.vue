<template>
  <div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a
        href="https://www.tradingview.com/symbols/NASDAQ-AAPL/technicals/"
        rel="noopener"
        target="_blank"
      >
        <span class="blue-text">AAPL stock analysis</span>
      </a>
      by TradingView
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    const widgetPlaceholder = document.getElementsByClassName('tradingview-widget-container')[0];
    widgetPlaceholder.replaceChildren(); // empty placeholder
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'NASDAQ:AAPL',
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'light',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    });
    widgetPlaceholder.appendChild(script);
  });
</script>

<style scoped lang="scss">
  // Your style code here
</style>
