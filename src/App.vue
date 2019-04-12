<template>
  <div class="min-h-screen font-sans text-grey text-xs bg-black antialiased">
    <header class="h-16 flex justify-between items-center bg-grey-darkest px-16 flex flex-wrap">
       <div class="flex items-center flex-no-shrink text-white mr-6">
        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full hidden flex-grow lg:block lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white mr-4">
            Exchange
          </router-link>
          <router-link to="funds" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white mr-4">
            Funds
          </router-link>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white mr-4">
            Trade
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white mr-4">
            Orders
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white mr-4">
            Transaction
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-grey no-underline hover:text-white">
            History
          </a>
        </div>
        <div>
          <router-link to="/account" class="inline-block text-sm px-4 py-2 leading-none border rounded no-underline text-white border-white bg-teal hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0">
            ideeofficial@gmail.com <span class="ml-2">&blacktriangledown;</span>
          </router-link>
        </div>
      </div>
      <!-- <div class="flex flex-wrap">
        <a href="#" class="mr-6">Logo</a>
        <ul class="list-reset block lg:flex flex-wrap">
          <li class="mr-6"><router-link to="/" class="text-grey no-underline">Exchange</router-link></li>
          <li class="mr-6"><router-link to="trade" class="text-grey no-underline">Trade</router-link></li>
          <li class="mr-6"><router-link to="orders" class="text-grey no-underline">Orders</router-link></li>
          <li class="mr-6"><router-link to="transaction" class="text-grey no-underline">Transaction</router-link></li>
          <li class=""><router-link to="history" class="text-grey no-underline">History</router-link></li>
        </ul>
      </div> -->
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import 'simplebar'
import 'simplebar/dist/simplebar.css'

export default {
  name: 'app',
  
}
</script>

<style>
  @tailwind preflight;
  @tailwind components;
  @tailwind utilities;

  /* SWITCH STYLES */
  /* SOURCE: https://proto.io/freebies/onoff/ */
  .onoffswitch {
      position: relative; width: 56px;
      -webkit-user-select:none; -moz-user-select:none; -ms-user-select: none;
  }
  .onoffswitch-checkbox {
      display: none;
  }
  .onoffswitch-label {
      display: block; overflow: hidden; cursor: pointer;
      border-radius: 20px;
  }
  .onoffswitch-inner {
      display: block; width: 200%; margin-left: -100%;
      transition: margin 0.3s ease-in 0s;
  }
  .onoffswitch-inner:before, .onoffswitch-inner:after {
      display: block; float: left; width: 50%; height: 22px; padding: 0; line-height: 22px;
      font-size: 12px; color: black; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
      box-sizing: border-box;
  }
  .onoffswitch-inner:before {
      content: "ON";
      padding-left: 6px;
      background-color: #38c172; color: #FFFFFF;
  }
  .onoffswitch-inner:after {
      content: "OFF";
      padding-right: 6px;
      background-color: #E85764; color: #FFFFFF;
      text-align: right;
  }
  .onoffswitch-switch {
      display: block; width: 12px; margin: 5px;
      background: #FFFFFF;
      position: absolute; top: 0; bottom: 0;
      right: 30px;
      border: 2px solid #FFFFFF; border-radius: 20px;
      transition: all 0.3s ease-in 0s; 
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
      margin-left: 0;
  }
  .onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
      right: 0px; 
  }
</style>
