<script setup lang="ts">

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object({
    company: Yup.string().required('Company is required'),
    position: Yup.string().required('Position is required'),
    role: Yup.string().required('Role is required'),
    level: Yup.string().required('Level is required'),
    contract: Yup.string().required('Contract is required'),
    location: Yup.string().required('Location is required'),
    languages: Yup.string().required('Languages is required'),
    tools: Yup.string().required('Tools is required'),
    featured: Yup.string().optional(),
    new: Yup.string().optional()
});

import { useJobsStore } from '@/stores/jobs/index';
const store = useJobsStore();


const onSubmit = async (values: any) => {
    console.log("input", values);
    await store.register(values);
  };

</script>

<template>
  <Form class="w-full max-w-lg" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }" >
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Company
        </label>
        <Field name="company" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.company }" placeholder="Company Name" />
        <div class="invalid-feedback">{{ errors.company }}</div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Position
        </label>
        <Field name="position" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.position }" placeholder="Position" />
        <div class="invalid-feedback">{{ errors.position }}</div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Role
        </label>
        <Field name="role" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.role }" placeholder="Role" />
        <div class="invalid-feedback">{{ errors.role }}</div>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Level
        </label>
        <div class="relative">
          <Field as="select" name="level" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" :class="{ 'is-invalid': errors.level }">
            <option value="Junior">Junior</option>
            <option value="Midweight">Midweight</option>
            <option value="Senior">Senior</option>
          </Field>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
          <div class="invalid-feedback">{{ errors.level }}</div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Contract
        </label>
        <Field name="contract" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.contract }" placeholder="Contract" />
        <div class="invalid-feedback">{{ errors.contract }}</div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Location
        </label>
        <Field name="location" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.location }" placeholder="Location" />
        <div class="invalid-feedback">{{ errors.location }}</div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Languages
        </label>
        <Field name="languages" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.languages }" placeholder="Languages" />
        <div class="invalid-feedback">{{ errors.languages }}</div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Tools
        </label>
        <Field name="tools" type="text" class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" :class="{ 'is-invalid': errors.position }" placeholder="Tools" />
        <div class="invalid-feedback">{{ errors.tools }}</div>
      </div>
    </div>

    <div class="flex flex-wrap ml-3 mb-6">
      <div class="flex items-center">
          <Field class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="featured" type="checkbox" value="true" />
          <label for="featured" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Featured</label>
      </div>
      <div class="ml-3 flex items-center">
          <Field class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name="new" type="checkbox" value="true" />
          <label for="new" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">New</label>
      </div>
    </div>

    <button class="primary light-grayish-cyan-bg rounded-sm text-sm" :disabled="isSubmitting">
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
        Create
    </button>

  </Form>

</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>