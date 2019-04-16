<template>
  <div class="mx-6 mt-6 pb-6">
    <h1 class="mb-4">Withdrawal</h1>
    <div class="md:flex">
      <div class="md:w-3/5 rounded bg-grey-darkest p-4 mb-6 md:mb-0 md:mr-4">
        <div class="md:w-3/5 mx-auto">
          <select class="w-full h-12 px-4 py-2 mb-6 bg-black text-white rounded">
            <option value="BTC">BTC (Bitcon)</option>
          </select>

          <div class="shadow-md border border-black rounded">
            <div class="min-h-70 p-4">
              <p class="mb-6">Balance: 50.91000000 BTC</p>
              <div class="w-full mb-6">
                <label for="walletAddress" class="block mb-2 font-bold">Wallet Address</label>
                <input type="text" id="walletAddress" placeholder="18Vz4S6aEhn2vabXCBT1h6JHs1eTi8XVDm" class="w-full h-12 px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="w-full mb-6">
                <label for="amount" class="block mb-2 font-bold">BTC Amount</label>
                <input type="text" id="amount" placeholder="0000000000" class="w-full h-12 px-4 py-2 rounded bg-black text-grey">
              </div>
              <p>Transaction Fee: <span class="font-bold">0.00000000</span> </p>
            </div>
            <button type="button" class="w-full bg-green p-4 text-white no-outline text-center rounded-b">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <div class="md:w-2/5 rounded bg-grey-darkest">
        <div class="p-4">
          <h3 class="text-white mb-6">Tips</h3>
          <p>
            1). Please do not withdraw to the ICO or crowd funding address. <br /><br />

            2). We will process your withdrawal in 30 minutes, it depends on the blockchain when the assets would finally transfered to your wallet. <br /><br />

            4). To enhance the security of your assets, if your withdrawal amount is larger than 50 BTC, we have to manually process your request, please double check your withdraw address. <br /><br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
