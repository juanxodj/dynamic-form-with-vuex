<template>
  <div class="about">
    <b-container>
      <h1>Create CFDI</h1>
      <b-row>
        <b-col sm="6" md="3">
          <b-form-group label="Serie">
            <b-form-input v-model="Serie"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="6" md="3">
          <b-form-group label="Folio">
            <b-form-input v-model="Folio"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12" mt-2>
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
        <b-col md="12" mt-2>
          <b-button size="sm" @click="addConcepto2(form)">Agregar</b-button>
        </b-col>
        <b-col md="12" mt-2>
          <b-table striped hover :items="Conceptos" :fields="fields" responsive>
            <template #cell(index)="row">
              {{ row.index + 1 }}
            </template>
            <template #cell(actions)="row">
              <b-button
                size="sm"
                @click="deleteConcepto(row.index)"
                variant="danger"
                >Delete</b-button
              >
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  data() {
    return {
      fields: ["index", "ClaveProdServ", "Cantidad", "Descripcion", "actions"],
      form: {
        ClaveProdServ: "hola",
        Cantidad: "hola",
        Descripcion: "hola",
      },
    };
  },
  methods: {
    ...mapMutations([
      "addConcepto",
      "deleteConcepto",
      "addConcepto2",
      "addComplemento",
    ]),
  },
  computed: {
    ...mapFields({
      Version: "form.Version",
      Serie: "form.Serie",
      Folio: "form.Folio",
      Conceptos: "form.Conceptos",
      statusCartaPorte: "statusCartaPorte",
      statusPago: "statusPago",
      statusComex: "statusComex",
    }),
  },
};
</script>
