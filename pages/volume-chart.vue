<template>
  <section class="section pt-5">
    <Network />
    <div class="columns">
      <div class="column is-10-tablet is-offset-1-tablet">
        <LineChart :chart-data="chartData" :options="chartOptions" />
      </div>
    </div>
    <div class="columns">
      <div class="column is-8-tablet is-offset-2-tablet">
        <p v-if="rawData">
          Stakeo is tracking {{ exchangeCount }} exchanges in the Switcheo
          Ecosystem. These exchanges have generated a total trading volume of
          {{ $n(totalVolume, 'volume') }} in the last 30 days.
          <span v-for="exchange in exchanges" :key="exchange.slug"
            >The exchange <strong>{{ exchange.name }}</strong> has contributed
            {{ $n(sumVolume(exchange), 'volume') }} to the total
            volume.&nbsp;</span
          >
        </p>
        <div v-else>
          <b-skeleton width="100%" :animated="true" />
          <b-skeleton width="100%" :animated="true" />
          <b-skeleton width="35%" :animated="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from '@/plugins/charts'

export default {
  components: { LineChart },
  data() {
    const defaultFontColor = '#363636'
    const defaultFontSize = 14
    const defaultFontFamily =
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;'

    return {
      rawData: null,
      chartData: {},
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          fontFamily: defaultFontFamily,
          fontColor: defaultFontColor,
          fontSize: defaultFontSize,
          text: 'Switcheo Ecosystem Volume',
        },
        legend: {
          position: 'bottom',
          labels: {
            // fontFamily: defaultFontFamily,
            fontColor: defaultFontColor,
            fontSize: defaultFontSize,
          },
        },
        tooltips: {
          backgroundColor: '#073c50',
          cornerRadius: 0,
          mode: 'index',
          position: 'nearest',
        },
        // hover: {
        //   mode: 'index',
        // },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Month',
                fontFamily: defaultFontFamily,
                fontColor: defaultFontColor,
                fontSize: defaultFontSize,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: 'Volume',
                fontFamily: defaultFontFamily,
                fontColor: defaultFontColor,
                fontSize: defaultFontSize,
              },
              ticks: {
                // Causes issues with SSR
                // callback(value, index, values) {
                //   return '$' + value
                // },
                fontColor: defaultFontColor,
              },
            },
          ],
        },
      },
    }
  },
  async fetch() {
    await this.$axios
      .get('/api/stats/volume', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        this.rawData = response.data
        this.chartData = {
          labels: response.data.labels.map((label) => label),
          datasets: response.data.exchanges.map((exchange) => ({
            label: exchange.name,
            borderColor: exchange.color,
            backgroundColor: this.$hexToRgba(exchange.color, 0.5),
            data: exchange.data.map((data) => data),
          })),
        }
      })
      .catch((_) => {})
  },
  computed: {
    exchangeCount() {
      return this.rawData.exchanges.length
    },
    totalVolume() {
      let volume = 0
      for (let i = 0; i < this.rawData.exchanges.length; i++) {
        const exchange = this.rawData.exchanges[i]
        volume += exchange.data
          .map((data) => data)
          .reduce((prev, curr) => prev + curr, 0)
      }

      return volume
    },
    exchanges() {
      return this.rawData.exchanges
    },
  },
  methods: {
    sumVolume(exchange) {
      let volume = 0
      volume += exchange.data
        .map((data) => data)
        .reduce((prev, curr) => prev + curr, 0)

      return volume
    },
  },
}
</script>
