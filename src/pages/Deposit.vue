<template>
  <div class="mx-6 mt-6 pb-6">
    <h1 class="mb-4">Deposit</h1>
    <div class="md:flex">
      <div class="md:w-3/5 rounded bg-grey-darkest p-4 mb-6 md:mb-0 md:mr-4">
        <div class="md:w-3/5 mx-auto">
          <select class="w-full h-12 px-4 py-2 mb-6 bg-black text-white rounded">
            <option value="BTC">BTC (Bitcon)</option>
          </select>

          <div class="shadow-md border border-black rounded">
            <div class="min-h-70 p-4 flex flex-col items-center justify-center">
              <img src="@/assets/images/qrcode-url.png" alt="QrCode" class="w-32 h-32 mb-6">
              <p class="font-bold">18Vz4S6aEhn2vabXCBT1h6JHs1eTi8XVDm</p>
            </div>
            <button type="button" class="w-full bg-blue p-4 text-white no-outline text-center rounded-b">
              View deposit history
            </button>
          </div>
        </div>
      </div>
      <div class="md:w-2/5 rounded bg-grey-darkest">
        <div class="p-4">
          <h3 class="text-white mb-6">Tips</h3>
          <p>
            1). The address is not allowed to deposit other assets other than BTC, and any other asset deposit will not be recovered. <br /><br />

            2). The deposit transaction will be automatic, and the BTC transfer will need to be confirmed by the entire BTC network, and your BTC will be automatically deposited to your account after 2 confirmation. <br /><br />

            3). This address is the only one you can use on your own, and you can do multiple recharging at the same time. <br /><br />
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
