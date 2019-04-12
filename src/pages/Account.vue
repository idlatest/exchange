<template>
  <div class="mx-6 mt-6 pb-6">
    <h1 class="mb-4">Account</h1>
    <div class="border-t border-grey-dark px-4 pb-4 pt-6">
      <div class="flex">
        <div class="w-1/3 mr-6">
          <h3 class="mb-4">Profile</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur reprehenderit nemo repellendus recusandae adipisci, ratione deleniti.</p>
        </div>
        <div class="w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="flex mb-6">
              <div class="w-1/2 mr-2">
                <label for="firstName" class="block mb-2 font-bold">First Name</label>
                <input type="text" id="firstName" placeholder="Idongesit" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="w-1/2 ml-2">
                <label for="lastName" class="block mb-2 font-bold">Last Name</label>
                <input type="text" id="lastName" placeholder="Ntuk" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="flex mb-6">
              <div class="w-1/2 mr-2">
                <label for="email" class="block mb-2 font-bold">Email</label>
                <input type="text" id="email" placeholder="ideeofficial@gmail.com" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="text-right">
              <input type="submit" value="Update" class="px-4 py-2 rounded bg-green text-white">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-grey-dark px-4 pb-4 pt-6">
      <div class="flex">
        <div class="w-1/3 mr-6">
          <h3 class="mb-4">Security</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur reprehenderit nemo repellendus recusandae adipisci, ratione deleniti.</p>
        </div>
        <div class="w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="flex mb-6">
              <div class="w-1/2 mr-2">
                <label for="oldPassword" class="block mb-2 font-bold">Old Password</label>
                <input type="password" id="oldPassword" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
              <div class="w-1/2 ml-2">
                <label for="newPassword" class="block mb-2 font-bold">New Password</label>
                <input type="password" id="newPassword" class="w-full px-4 py-2 rounded bg-black text-grey">
              </div>
            </div>
            <div class="flex mb-6">
              <div class="w-1/2 mr-2">
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
    <div class="border-t border-grey-dark px-4 pb-4 pt-6">
      <div class="flex">
        <div class="w-1/3 mr-6">
          <h3 class="mb-4">Preference</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, fugit delectus tempore aspernatur consequuntur tenetur reprehenderit nemo repellendus recusandae adipisci, ratione deleniti.</p>
        </div>
        <div class="w-2/3">
          <div class="bg-grey-darkest p-4 rounded">
            <div class="flex mb-6">
              <div class="w-1/3 mr-2">
                <label for="oldPassword" class="block mb-2 font-bold">Two-factor Authentication</label>
                <div class="onoffswitch">
                  <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="twofactor" checked>
                  <label class="onoffswitch-label" for="twofactor">
                    <span class="onoffswitch-inner"></span>
                    <span class="onoffswitch-switch"></span>
                  </label>
                </div>
              </div>
              <div class="w-1/3 ml-2">
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
