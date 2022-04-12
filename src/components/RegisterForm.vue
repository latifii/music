<template>
  <vee-form
    :validation-schema="schema"
    :initial-values="formValue"
    @submit="register"
  >
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="regShowAlert"
      :class="regAlertVariant"
    >
      {{ regAlertMsg }}
    </div>
    <!-- Name -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Name</label>
      <vee-field
        type="text"
        name="name"
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
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
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
    <!-- Age -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Age</label>
      <vee-field
        type="number"
        name="age"
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
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
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
    <!-- Confirm Password -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        type="password"
        name="pass_confirmed"
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
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="pass_confirmed" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block mb-2">Country</label>
      <vee-field
        as="select"
        name="country"
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
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Brazil">Brazil</option>
      </vee-field>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage class="text-red-600 block" name="tos" />
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
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:50|alpha_spaces',
        email: 'required|min:3|max:50|email',
        password: 'required|min:3|max:50',
        age: 'required|min_value:18|max_value:60',
        pass_confirmed: 'confirmed:@password',
        country: 'required|country_excluded:Brazil',
        tos: 'tos',
      },
      formValue: {
        country: 'USA',
      },
      regInSubmission: false,
      regShowAlert: false,
      regAlertVariant: 'bg-blue-500',
      regAlertMsg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    register(values) {
      this.regInSubmission = true;
      this.regShowAlert = true;
      this.regAlertVariant = 'bg-green-500';
      this.regAlertMsg = 'Success! Your account has been created.';
      console.log(values);
    },
  },
};
</script>
