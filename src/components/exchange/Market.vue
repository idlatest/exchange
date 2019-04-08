<template>
  <div class="w-full md:w-1/4 md:px-1 lg:mb-0 mb-2">
    <div class="bg-grey-darkest rounded h-90">
      <div class="p-4">
        <h3 class="text-white mb-4">Markets: <span class="ml-6">BLN/BTC</span></h3>
        <div class="flex justify-between mb-6">
          <input class="mr-3 bg-transparent text-grey outline-none" type="text" placeholder="Search...">
          <select class="w-20 p-1 rounded text-white bg-black outline-none">
            <option value="BLN">BLN</option>
            <option value="BLN">BTC</option>
            <option value="BLN">ETH</option>
          </select>
        </div>
        <div data-simplebar class="overflow-y-auto h-70">
          <table class="w-full">
            <thead>
              <tr class="mb-6">
                <th class="py-3 px-2 text-left">Name</th>
                <th class="py-3 px-2 text-left">Price</th>
                <th class="py-3 px-2 text-left">Change</th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="hover:bg-grey-darker">
                <td class="py-2 px-2 rounded-l-lg">
                  <span class="font-semibold text-white">BTC</span>
                </td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2 rounded-r-lg"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2 rounded-l-lg"><span class="font-semibold text-white">ETH</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span>&#x02550; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2 rounded-l-lg"><span class="font-semibold text-white">BAT</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">BLN</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">CVC</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-red">&blacktriangledown; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">DGD</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">DTL</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">FUN</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-red">&blacktriangledown; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">DTL</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">DTL</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
              <tr>
                <td class="py-2 px-2"><span class="font-semibold text-white">DTL</span></td>
                <td class="py-2 px-2">8000.00</td>
                <td class="py-2 px-2"><span class="text-green">&blacktriangle; 0.10%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
