<template>
  <b-container>
    <h1>Create CFDI</h1>
    <b-row>
      <b-col sm="6" md="3">
        <b-form-group label="ClaveProdServ">
          <b-form-input v-model="form.ClaveProdServ"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6" md="3">
        <b-form-group label="Cantidad">
          <b-form-input v-model="form.Cantidad"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6" md="3">
        <b-form-group label="ClaveUnidad">
          <b-form-input v-model="form.ClaveUnidad"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col sm="6" md="3">
        <b-form-group label="Descripcion">
          <b-form-input v-model="form.Descripcion"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" mt-2>
        <b-button size="sm" @click="addConcepto">{{
          indexEdit === null ? "Agregar" : "Actualizar"
        }}</b-button>
      </b-col>
      <b-col md="12" mt-2>
        <b-table striped hover :items="Conceptos" :fields="fields" responsive>
          <template #cell(index)="row">
            {{ row.index + 1 }}
          </template>
          <template #cell(actions)="row">
            <b-button-group>
              <b-button size="sm" @click="editConcepto(row)" variant="warning"
                >Edit</b-button
              >
              <b-button
                size="sm"
                @click="deleteConcepto(row.index)"
                variant="danger"
                >Delete</b-button
              >
            </b-button-group>
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
  name: "CFDI",
  components: {
    GlobalInvoice,
  },
  data() {
    return {
      fields: ["index", "ClaveProdServ", "Cantidad", "Descripcion", "actions"],
      form: {
        ClaveProdServ: "84111506",
        Cantidad: 1,
        ClaveUnidad: "ACT",
        Descripcion: "Pago1",
        ValorUnitario: 0,
        Importe: 0,
        ObjetoImp: "01",
      },
    };
  },
  methods: {
    ...mapMutations(["pushConcepto", "deleteConcepto", "addInformacionGlobal"]),
    addConcepto() {
      this.pushConcepto(this.form);
      this.form = {
        ClaveProdServ: null,
        Cantidad: null,
        ClaveUnidad: null,
        Descripcion: null,
        ValorUnitario: null,
        Importe: null,
        ObjetoImp: null,
      };
    },
    editConcepto(data) {
      this.indexEdit = data.index;
      this.form = data.item;
    },
  },
  computed: {
    ...mapFields({
      Conceptos: "form.Conceptos",
      statusComponent: "statusComponent",
      indexEdit: "indexEdit",
    }),
  },
};
</script>
