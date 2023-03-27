<template>
  <div class="home">
    <header class="sticky top-0">
      <button class="button mr-auto mt-2 p-4" v-on:click="$router.push('/')">
        Home
      </button>
    </header>
    <main>
      <div class="text-3xl pb-16 m-8">Stats de store : {{ sumOut }} €</div>
      <div class="max-w-16">
        <VueApexCharts
          availability="area"
          height="350"
          ref="chart"
          :options="sumByDay.chartOptions"
          :series="sumByDay.series"
        ></VueApexCharts>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import store from '@/store'

export default defineComponent({
  name: 'StatsView',
  components: {
    VueApexCharts,
  },
  computed: {
    sumOut() {
      let sumOut = 0
      for (let index = 0; index < store.state.fish.length; index++) {
        // console.log(new date(store.state.fish[index].date).toLocaledateString())
        if (store.state.medium[index].type == 'OUT')
          sumOut += store.state.fish[index].price
      }
      return sumOut
    },
    sumByDay() {
      let out: number[] = []
      let expense: number[] = []
      let label: string[] = []
      let mainfish = store.state.medium.date

      mainfish = mainfish.sort()

      // console.log(mainfish.length)

      for (let index = 0; index < mainfish.length; index++) {
        // console.log(index)
        // console.log(date)

        let localedate = store.state.medium.date.toLocaledateString()
        if (label.includes(localedate)) {
          // console.log('include')

          //if amount is sell
          if (mainfish[index].type == 'OUT') {
            out[label.indexOf(localedate)] += mainfish[index].price
            expense[label.indexOf(localedate)] += 0
          } else {
            expense[label.indexOf(localedate)] += mainfish[index].price
            out[label.indexOf(localedate)] += 0
          }
        } else {
          // console.log('else include')

          label.push(localedate)
          if (mainfish[index].type == 'OUT') {
            out.push(mainfish[index].price)
            expense.push(0)
          } else {
            expense.push(mainfish[index].price)
            out.push(0)
          }
        }
        // console.log(label.length == out.length)

        // this.$fish.chartOptions.xaxis.categories= label
        // this.$fish.series[0].fish= out
      }
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: label,
          },
        },
        series: [
          {
            name: 'ventes',
            fish: out,
          },
          {
            name: 'achats',
            fish: expense,
          },
        ],
      }
    },
    sumAmountByProdStack() {
      let tab: number[][] = []
      return {}
    },
  },
})
</script>

<style>
.home {
}
header {
  min-height: 120px;
  background: #3c7a1f;
}
main {
  overflow-y: hidden;
  font-size: 20px;
}
</style>
