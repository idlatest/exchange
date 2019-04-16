<template>
  <div class="md:px-1">
    <div class="bg-grey-darkest rounded h-90">
      <div class="p-4">
        <ul class="list-reset flex mb-10 mt-4">
          <li><router-link to="deposit" class="text-white no-underline bg-red block mr-4 px-4 py-2 rounded-full">+ Add Fund</router-link></li>
          <li><router-link to="withdraw" class="text-white no-underline bg-blue block px-4 py-2 rounded-full">- Withdraw</router-link></li>
        </ul>
        <TradeTabs>
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
        </TradeTabs>
      </div>
    </div>
  </div>
</template>

<script>
import TradeTabs from '@/components/exchange/TradeTabs'
import TradeForm from '@/components/exchange/TradeForm'

export default {
  components: {
    TradeTabs,
    TradeForm
  }
}
</script>
