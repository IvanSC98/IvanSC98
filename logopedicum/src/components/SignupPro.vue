<template>
  <div class="signup">


    <v-card class="contenido">

      <p class="title1">Cuenta Pro</p>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="formulario"
    > 

      <v-text-field
        v-model="especialidad"
        :rules="especialidadRules"
        label="Especialidad"
        required
      ></v-text-field>

      <v-text-field
        v-model="numero"
        :rules="numeroRules"
        label="Nº de colegiado"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        v-model="apellidos"
        :rules="apellidosRules"
        label="Apellidos"
        required
      ></v-text-field>

      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Fecha de nacimiento"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          scrollable
          locale="es"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>

      <v-text-field
        v-model="user"
        :counter="15"
        :rules="userRules"
        label="Usuario"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="email1"
        :rules="email1Rules"
        label="Confirmar E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Contraseña"
        required
        :append-icon="value ? 'visibility' : 'visibility_off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
      ></v-text-field>

      <v-text-field
        v-model="password1"
        :rules="password1Rules"
        label="Repetir Contraseña"
        required
        :append-icon="value ? 'visibility' : 'visibility_off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Debes confirmar para continuar!']"
        label="Confirma que todos los datos son correctos?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="registrar"
      >
        Registrar
      </v-btn>
    </v-form>

    </v-card>
  </div>
    
</template>
<script>
export default {
  name: 'Signup',
  components: {
    
  },
  data: () => ({
      value: String,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.formulario{
  width: 80hw;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
  padding-bottom: 5%;
}

.contenido{
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.title1{
  font-family: fantasy !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  text-align: center;
  vertical-align: middle;
}

</style>