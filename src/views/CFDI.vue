<template>
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
        <b-button size="sm" @click="addConcepto(form)">Agregar</b-button>
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
      <b-col md="12">
        <div class="card">
          <div class="card-header">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="statusComponent"
                @change="addInformacionGlobal"
              />
              <label>
                {{ statusComponent }}
              </label>
            </div>
          </div>
          <div class="card-body" v-show="statusComponent">
            <global-invoice v-if="statusComponent" />
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapFields } from "vuex-map-fields";
import GlobalInvoice from "./GlobalInvoice";

export default {
  components: {
    GlobalInvoice,
  },
  data() {
    return {
      fields: ["index", "ClaveProdServ", "Cantidad", "Descripcion", "actions"],
    };
  },
  methods: {
    ...mapMutations([
      "addConcepto",
      "deleteConcepto",
      "addComplemento",
      "addInformacionGlobal",
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
      statusComponent: "statusComponent",
    }),
  },
};
</script>
