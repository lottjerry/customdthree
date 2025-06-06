<template>
  <div class="flex w-full flex-col items-center gap-2">
    <h3 class="w-3/4">Email *</h3>
    <form
      @submit="onSubmit"
      class="border-colors flex h-14 w-10/12 items-center justify-between rounded-3xl border bg-transparent px-1 md:w-3/4"
      :class="errors.email ? 'border-red-600' : 'border-white'"
    >
      <input
        v-model="email"
        v-bind="emailAttrs"
        class="ml-5 h-8 w-72 bg-transparent outline-none md:text-lg"
        placeholder="example@domain.com"
      />
      <button
        :disabled="errors.email"
        class="mr-3 h-12 w-32 rounded-3xl border text-sm transition-transform duration-700 ease-in-out hover:translate-x-3 disabled:translate-x-0 disabled:cursor-not-allowed disabled:border-red-600 disabled:opacity-50 md:w-32 md:text-lg"
        :class="errors.email ? '' : 'button-animation'"
      >
        <span>Notify Me!</span>
      </button>
    </form>
    <p class="absolute bottom-4 w-3/4 text-red-600">{{ errors.email }}</p>
  </div>
</template>

<script setup>
  import * as yup from 'yup';
  import { useForm } from 'vee-validate';
  import { doc, setDoc } from 'firebase/firestore';

  const { errors, handleSubmit, defineField } = useForm({
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Please enter a valid email.')
        .required('Please enter an email.'),
    }),
  });

  const [email, emailAttrs] = defineField('email');
  const db = useFirestore();
  const collectionName = 'emails';

  const onSubmit = handleSubmit(async (values) => {
    try {
      const docRef = doc(db, collectionName, values.email.toLowerCase());
      await setDoc(docRef, {
        email: values.email.toLowerCase(),
        timestamp: new Date(),
      });
      alert('Email saved successfully!');
    } catch (error) {
      alert(error.message);
    }
  });
</script>

<style scoped>
  .button-animation:hover {
    animation: gradientAnimation 15s linear infinite;
    background: linear-gradient(
      90deg,
      rgba(145, 209, 241, 1) 5%,
      rgba(37, 165, 230, 1) 16%,
      rgba(37, 47, 255, 1) 29%,
      rgba(245, 245, 247, 1) 41%,
      rgba(95, 95, 99, 1) 62%,
      rgba(240, 167, 47, 1) 73%,
      rgba(236, 108, 51, 1) 82%,
      rgba(227, 69, 52, 1) 93%,
      rgba(205, 24, 194, 1) 95%,
      rgba(145, 209, 241, 1) 99%
    );

    background-size: 400% auto;
    background-clip: text;
    color: transparent;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 400% 100%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  .border-colors {
    transition: all 0.5s ease-in-out;
  }

  .border-colors:focus-within {
    transition: all 0.5s ease-in-out;
    border-color: rgba(240, 167, 47, 0.5) rgba(145, 209, 241, 0.5)
      rgba(37, 165, 230, 0.5) rgba(227, 69, 52, 0.5);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }
</style>
