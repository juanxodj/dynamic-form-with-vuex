<template>
  <b-container>
    <h1>CRUD</h1>
    <b-row>
      <b-col md="12">
        <b-form-group label="Complemento">
          <b-form-checkbox
            v-model="statusCartaPorte"
            @change="addComplemento('CartaPorte')"
          >
            Carta Porte
          </b-form-checkbox>
          <b-form-checkbox
            v-model="statusPago"
            @change="addComplemento('Pago')"
          >
            Pago
          </b-form-checkbox>
          <b-form-checkbox
            v-model="statusComex"
            @change="addComplemento('ComercioExterior')"
          >
            Comercio Exterior
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-table striped hover :items="Conceptos" responsive>
          <template #cell(index)="row">
            {{ row.index + 1 }}
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["addComplemento"]),
  },
  computed: {
    ...mapFields({
      Conceptos: "form.Conceptos",
      statusCartaPorte: "statusCartaPorte",
      statusPago: "statusPago",
      statusComex: "statusComex",
    }),
  },
};
</script>
