<template>
  <div>
    <MarketStats />
    <div class="flex flex-wrap mx-6 mt-6 mb-2">
      <div class="w-full md:w-1/4">
        <Market />
      </div>
      <div class="w-full md:w-1/2">
        <Chart />
      </div>
      <div class="w-full md:w-1/4">
        <Trade />
      </div>
    </div>
    <div class="flex flex-wrap mx-6 pb-6">
      <div class="w-full md:w-1/4">
        <TradeHistory />
      </div>
      <div class="w-full md:w-1/2">
        <AllOrders />
      </div>
      <div class="w-full md:w-1/4">
        <MyOrders />
      </div>
    </div>
  </div>
</template>

<script>
import MarketStats from '@/components/exchange/MarketStats'
import Market from '@/components/exchange/Market'
import Chart from '@/components/exchange/Chart'
import Trade from '@/components/exchange/Trade'
import TradeHistory from '@/components/exchange/TradeHistory'
import AllOrders from '@/components/exchange/AllOrders'
import MyOrders from '@/components/exchange/MyOrders'

export default {
  name: 'exchange',
  components: {
    MarketStats,
    Market,
    Chart,
    Trade,
    TradeHistory,
    AllOrders,
    MyOrders
  }
}
</script>
