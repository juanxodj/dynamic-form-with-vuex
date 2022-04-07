<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Periodicidad">
        <b-form-input v-model="Periodicidad"></b-form-input>
      </b-form-group>
      <b-form-group label="Meses">
        <b-form-input v-model="Meses"></b-form-input>
      </b-form-group>
      <b-form-group label="Año">
        <b-form-input v-model="Año" type="number"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "GlobalInvoice",
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      alert("Form submitted!");
    },
  },
  computed: {
    ...mapFields({
      Periodicidad: "form.InformacionGlobal.Periodicidad",
      Meses: "form.InformacionGlobal.Meses",
      Año: "form.InformacionGlobal.Año",
    }),
  },
};
</script>
