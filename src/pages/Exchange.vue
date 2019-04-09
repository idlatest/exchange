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
        <Trade>
          <TradeForm name="Buy BTC">
            <div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Price:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Qty:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Total:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="text-right">
                <input type="submit" value="Buy BTC" class="px-4 py-2 rounded bg-green text-white">
              </div>
            </div>
          </TradeForm>
          <TradeForm name="Sell BLN">
            <div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Price:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Qty:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="mb-4">
                <label for="price" class="font-bold block mb-2">Total:</label>
                <input type="text" id="price" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="text-right">
                <input type="submit" value="Sell BLN" class="px-4 py-2 rounded bg-green text-white">
              </div>
            </div>
          </TradeForm>
        </Trade>
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
import TradeForm from '@/components/exchange/TradeForm'

export default {
  name: 'exchange',
  components: {
    MarketStats,
    Market,
    Chart,
    Trade,
    TradeHistory,
    AllOrders,
    MyOrders,
    TradeForm
  }
}
</script>
