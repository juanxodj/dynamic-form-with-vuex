<template>
  <div class="about">
    <b-container class="bv-example-row">
      <h1>This is an about page</h1>
      <b-row>
        <b-col sm="6" md="3">
          <b-form-group label="Field A">
            <b-form-input v-model="fieldA"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="6" md="3">
          <b-form-group label="Field B">
            <b-form-input v-model="fieldB"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row
        sm="6"
        md="3"
        v-for="(address, index) in addresses"
        v-bind:key="address.id"
      >
        <b-col>
          <b-form-group label="ZIP">
            <b-form-input v-model="address.zip"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Town">
            <b-form-input v-model="address.town"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button @click="deleteAddressRow(index)">Delete</b-button>
        </b-col>
      </b-row>
      <b-button @click="addAddressRow">Add</b-button>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapFields, mapMultiRowFields } from "vuex-map-fields";

export default {
  methods: {
    ...mapMutations(["addAddressRow", "deleteAddressRow"]),
  },
  computed: {
    ...mapFields(["fieldA", "fieldB"]),
    ...mapMultiRowFields(["addresses"]),
  },
};
</script>
