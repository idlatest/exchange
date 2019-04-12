<template>
  <div class="mx-6 mt-6 pb-6">
    <h1 class="mb-4">Account</h1>
    <div class="border-t border-grey-dark pb-4 pt-6">
      <div class="md:flex">
        <div class="w-full md:w-1/3 mr-6 mb-4">
          <h3 class="mb-4">Profile</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur.</p>
        </div>
        <div class="w-full md:w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="md:flex">
              <div class="w-full md:w-1/2 md:mr-2 mb-6">
                <label for="firstName" class="block mb-2 font-bold">First Name</label>
                <input type="text" id="firstName" placeholder="Idongesit" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="w-full md:w-1/2 md:ml-2 mb-6">
                <label for="lastName" class="block mb-2 font-bold">Last Name</label>
                <input type="text" id="lastName" placeholder="Ntuk" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="md:flex">
              <div class="w-full md:w-1/2 md:mr-2 mb-6">
                <label for="email" class="block mb-2 font-bold">Email</label>
                <input type="email" id="email" placeholder="ideeofficial@gmail.com" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="text-right">
              <input type="submit" value="Update" class="px-4 py-2 rounded bg-green text-white">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-dark pb-4 pt-6">
      <div class="md:flex">
        <div class="w-full md:w-1/3 mr-6 mb-4">
          <h3 class="mb-4">Security</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur.</p>
        </div>
        <div class="w-full md:w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="md:flex">
              <div class="w-full md:w-1/2 md:mr-2 mb-6">
                <label for="oldPassword" class="block mb-2 font-bold">Old Password</label>
                <input type="password" id="oldPassword" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="w-full md:w-1/2 md:ml-2 mb-6">
                <label for="newPassword" class="block mb-2 font-bold">New Password</label>
                <input type="password" id="newPassword" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="md:flex">
              <div class="w-full md:w-1/2 md:mr-2 mb-6">
                <label for="confirmPassword" class="block mb-2 font-bold">Confirm Password</label>
                <input type="password" id="confirmPassword" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="text-right">
              <input type="submit" value="Update" class="px-4 py-2 rounded bg-green text-white">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-dark pb-4 pt-6">
      <div class="md:flex">
        <div class="w-full md:w-1/3 mr-6 mb-4">
          <h3 class="mb-4">Preference</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur.</p>
        </div>
        <div class="w-full md:w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="md:flex">
              <div class="w-full md:w-1/3 md:ml-2 mb-6">
                <label for="oldPassword" class="block mb-2 font-bold">Two-factor Authentication</label>
                <div class="onoffswitch">
                  <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="twofactor" checked>
                  <label class="onoffswitch-label" for="twofactor">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
              <div class="w-full md:w-1/3 md:mr-2 mb-6">
                <label for="newPassword" class="block mb-2 font-bold">Trade Fee Discount</label>
                <div class="onoffswitch">
                  <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="tradfee" checked>
                  <label class="onoffswitch-label" for="tradfee">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
