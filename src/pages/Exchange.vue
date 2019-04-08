<template>
  <div>
    <MarketStats />
    <div class="flex flex-wrap mx-6 mt-6 mb-2">
      <Market />
      <Chart />
      <Trade />
    </div>
    <div class="flex flex-wrap mx-6 pb-6">
      <TradeHistory />
      <AllOrders />
      <MyOrders />
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
