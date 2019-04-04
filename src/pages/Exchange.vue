<template>
  <div>
    <div class="min-h-10 lg:h-10 lg:flex hidden bg-black shadow-md px-16 items-center">
      <ul class="list-reset block lg:flex">
        <li class="lg:pr-8 border-r-2">Last Price: <span class="text-white font-semibold text-base">1,039.99</span></li>
        <li class="lg:px-8 border-r-2">24h Spread: <span class="text-white font-semibold text-base">1,039.99</span></li>
        <li class="lg:px-8 border-r-2">24h High: <span class="text-white font-semibold text-base">1,039.99</span></li>
        <li class="lg:px-8 border-r-2">24h Low: <span class="text-white font-semibold text-base">1,039.99</span></li>
        <li class="lg:px-8">24h Volume: <span class="text-white font-semibold text-base">1,039.99</span></li>
      </ul>
    </div>
    <div class="flex flex-wrap mx-6 mt-6">
      <div class="w-full md:w-1/2 lg:w-1/4 md:px-2 mb-4">
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
                    <th class="w-1/3 py-3 px-4 text-left">Name</th>
                    <th class="w-1/3 py-3 px-4 text-left">Price</th>
                    <th class="w-1/3 py-3 px-4 text-left">Change</th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg">
                      <span class="font-semibold text-white">BTC</span>
                    </td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4 rounded-l-lg"><span class="font-semibold text-white">ETH</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span>&#x02550; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4 rounded-l-lg"><span class="font-semibold text-white">BAT</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">BLN</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">CVC</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-red">&blacktriangledown; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">DGD</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">DTL</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">FUN</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-red">&blacktriangledown; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">DTL</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">DTL</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                  <tr>
                    <td class="w-1/3 py-2 px-4"><span class="font-semibold text-white">DTL</span></td>
                    <td class="w-1/3 py-2 px-4">8000.00</td>
                    <td class="w-1/3 py-2 px-4"><span class="text-green">&blacktriangle; 0.10%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:px-2 mb-4">
        <div class="bg-grey-darkest rounded h-90">
          <div class="p-4">
            <h3 class="text-white">Chart</h3>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 md:px-2 mb-4">
        <div class="bg-grey-darkest rounded h-90">
          <div class="p-4">
            <ul class="list-reset flex mb-10 mt-4">
              <li><a href="#" class="text-white no-underline bg-red block mr-4 px-4 py-2 rounded-full">+ Add Fund</a></li>
              <li><a href="#" class="text-white no-underline bg-blue block px-4 py-2 rounded-full">- Withdraw</a></li>
            </ul>
            <ul class="list-reset flex mb-6">
              <li><a href="#" class="text-white text-base mr-6 no-underline font-semibold">Buy BTC</a></li>
              <li><a href="#" class="text-grey text-base mr-6 no-underline font-semibold">Sell BLN</a></li>
            </ul>
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
                <input type="submit" class="px-4 py-2 rounded bg-green text-white">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mx-6">
      <div class="w-full md:w-1/2 lg:w-1/4 md:px-2 mb-6">
        <div class="bg-grey-darkest rounded h-90">
          <div class="p-4">
            <h3 class="text-white mb-4">Trade History</h3>
            <div data-simplebar class="overflow-y-auto h-75">
              <table class="w-full">
                <thead>
                  <tr class="mb-6">
                    <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Price (BTC)</th>
                    <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Qty (BLN)</th>
                    <th class="w-1/3 py-3 px-4 text-left">Time</th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-green">&blacktriangle;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-green">&blacktriangle;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-green">&blacktriangle;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-green">&blacktriangle;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-red">&blacktriangledown;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                  <tr class="hover:bg-grey-darker">
                    <td class="w-1/3 py-2 px-4 rounded-l-lg text-white whitespace-no-wrap">
                      <span class="text-green">&blacktriangle;</span> 550,000.00
                    </td>
                    <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                    <td class="w-1/3 py-2 px-4 rounded-r-lg"> 19:55:01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 md:px-2 mb-6">
        <div class="bg-grey-darkest rounded h-90">
          <div class="p-4">
            <div class="flex">
              <div class="w-1/2 min-h-full pr-4 border-r-2 border-black">
                <div class="flex justify-between mb-4">
                  <h3 class="text-white">Buy Orders</h3>
                  <div class="font-bold">Total: <span class="text-white">550,000.0</span> BTC</div>
                </div>
                <div data-simplebar class="w-full overflow-y-auto h-75">
                  <table class="w-full">
                    <thead>
                      <tr class="mb-6">
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Price (BTC)</th>
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Qty (BLN)</th>
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Total (BTC)</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-green">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="w-1/2 pl-4">
                <div class="flex justify-between mb-4">
                  <h3 class="text-white">Sell Orders</h3>
                  <div class="font-bold">Total: <span class="text-white">550,000.0</span> BLN</div>
                </div>
                <div data-simplebar class="w-full overflow-y-auto h-75">
                  <table class="w-full">
                    <thead>
                      <tr class="mb-6">
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Price (BLN)</th>
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Qty (BTC)</th>
                        <th class="w-1/3 py-3 px-4 text-left whitespace-no-wrap">Total (BLN)</th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                      <tr class="hover:bg-grey-darker">
                        <td class="w-1/3 py-2 px-4 rounded-l-lg text-white text-red">
                          550,000.00
                        </td>
                        <td class="w-1/3 py-2 px-4 text-white">8000.00</td>
                        <td class="w-1/3 py-2 px-4 rounded-r-lg text-white"> 10,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 md:px-2 mb-6">
        <div class="bg-grey-darkest rounded h-90">
          <div class="p-4">
            <h3 class="text-white mb-4">My Orders</h3>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exchange'
}
</script>
