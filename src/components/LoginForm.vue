<template>
  <vee-form :validation-schema="schemaForm" @submit="login">
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="loginShowAlert"
      :class="loginAlertVariant"
    >
      {{ loginAlertMsg }}
    </div>
    <!-- Email -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <!--  eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      schemaForm: {
        email: 'required|email',
        password: 'required',
      },
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: 'bg-blue-500',
      loginAlertMsg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    login(values) {
      this.loginInSubmission = true;
      this.loginShowAlert = true;
      this.loginAlertVariant = 'bg-green-500';
      this.loginAlertMsg = 'Success! Your account Login.';
      console.log(values);
    },
  },
};
</script>

<style>
</style>
