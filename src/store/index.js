import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statusCartaPorte: false,
    statusPago: false,
    statusComex: false,
    form: {
      Version: "4.0",
      Serie: "CP01",
      Folio: 1,
      Conceptos: [
        {
          ClaveProdServ: "84111506",
          Cantidad: 1,
          ClaveUnidad: "ACT",
          Descripcion: "Pago1",
          ValorUnitario: 0,
          Importe: 0,
          ObjetoImp: "01",
        },
        {
          ClaveProdServ: "84111506",
          Cantidad: 1,
          ClaveUnidad: "ACT",
          Descripcion: "Pago2",
          ValorUnitario: 0,
          Importe: 0,
          ObjetoImp: "01",
        },
        {
          ClaveProdServ: "84111506",
          Cantidad: 1,
          ClaveUnidad: "ACT",
          Descripcion: "Pago3",
          ValorUnitario: 0,
          Importe: 0,
          ObjetoImp: "01",
        },
      ],
    },
    fieldA: null,
    fieldB: null,
    addresses: [
      {
        zip: "12345",
        town: "Foo Town",
      },
      {
        zip: "54321",
        town: "Bar Town",
      },
    ],
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
    addAddressRow(state) {
      state.addresses.push({
        zip: "",
        town: "",
        street: "",
      });
    },
    deleteAddressRow(state, index) {
      state.addresses.splice(index, 1);
    },
    addConcepto(state) {
      state.form.Conceptos.push({
        ClaveProdServ: "84111506",
        Cantidad: 1,
        ClaveUnidad: "ACT",
        Descripcion: "Pago3",
        ValorUnitario: 0,
        Importe: 0,
        ObjetoImp: "01",
      });
    },
    addConcepto2(state, form) {
      state.form.Conceptos.push(form);
    },
    deleteConcepto(state, index) {
      state.form.Conceptos.splice(index, 1);
    },
    addComplemento(state, type) {
      let Complemento = {
        [type]: {},
      };

      let hasProperty = Object.prototype.hasOwnProperty.call(
        state.form,
        "Complemento"
      );

      let val;

      if (type === "CartaPorte") val = state.statusCartaPorte;
      if (type === "Pago") val = state.statusPago;
      if (type === "ComercioExterior") val = state.statusComex;

      if (val) {
        if (hasProperty) {
          state.form.Complemento[type] = Complemento[type];
        } else {
          state.form.Complemento = Complemento;
        }
      } else {
        if (hasProperty) {
          let count = Object.keys(state.form.Complemento).length;
          if (count === 1) delete state.form.Complemento;
          else delete state.form.Complemento[type];
        }
      }
    },
  },
  actions: {},
  modules: {},
});
