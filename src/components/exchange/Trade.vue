<template>
  <div class="md:px-1">
    <div class="bg-grey-darkest rounded h-90">
      <div class="p-4">
        <ul class="list-reset flex mb-10 mt-4">
          <li><a href="#" class="text-white no-underline bg-red block mr-4 px-4 py-2 rounded-full">+ Add Fund</a></li>
          <li><a href="#" class="text-white no-underline bg-blue block px-4 py-2 rounded-full">- Withdraw</a></li>
        </ul>
        <div>
          <ul class="list-reset flex mb-6">
            <li v-for="(tab, index) in tabs" :key="index">
              <a
                href="#" 
                @click.prevent="switchTab(tab.hash)"
                class="text-base mr-6 no-underline font-semibold"
                :class="[tab.active ? 'text-white' : 'text-grey']"
              >
                {{ tab.name }}
              </a>
            </li>
          </ul>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    findTab (hash) {
      return this.tabs.find(tab => {
        return tab.hash === hash
      })
    },
    switchTab(hash) {
      const selectedTab = this.findTab(hash)

      if (typeof selectedTab === 'undefined') {
        return
      }

      this.tabs.forEach(tab => {
        tab.active = (tab.hash === selectedTab.hash)
      })
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.switchTab(this.tabs[0].hash)
  }

}
</script>
