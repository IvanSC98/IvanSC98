<template>
  <div class="congresos">
    
    <p class="title1">Congresos</p>

    <div class="contenedor">
      
        <div class="calendario">
        <v-sheet
          tile
          class="d-flex"
        >
          <v-btn
            icon
            class="ma-2"
            @click="$refs.calendar.prev()"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-select
            v-model="type"
            :items="types"
            dense
            outlined
            hide-details
            class="ma-2"
            label="type"
          ></v-select>
          <v-select
            v-model="weekday"
            :items="weekdays"
            dense
            outlined
            hide-details
            label="weekdays"
            class="ma-2"
          ></v-select>
          <v-spacer></v-spacer>
          <v-btn
            icon
            class="ma-2"
            @click="$refs.calendar.next()"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-sheet>
        <v-sheet >
          <v-calendar
            ref="calendar"
            v-model="value"
            :weekdays="weekday"
            :type="type"
            :events="events"
            :event-overlap-mode="mode"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            @change="getEvents"
          ></v-calendar>
        </v-sheet>
        </div>
      
      
      <v-card
        class="vcard"
      >

        <v-toolbar
          color="teal"
          dark
        >

          <v-toolbar-title>Últimos congresos</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in cards"
              :key="card.title"
              :cols="card.flex"
            >
              <v-card>
                <div class="noticia">

                  <v-img
                    class="imagen"
                    :src="card.src"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="100px"
                  >
                    <a><v-card-title class="titulo" v-text="card.title"></v-card-title></a>
                  </v-img>

                  <v-card>
                    <p class="descripcion">Hola</p>
                  </v-card>


                </div>

                <v-card-actions>
                  <a>Saber más...</a>

                  <v-spacer></v-spacer>

                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      

    </div>
    
  </div>
    
</template>
<script>
export default {
  name: 'Congresos',
  components: {
    
  },
  data: () => ({
      cards: [
        { title: 'Congreso 1', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Congreso 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
        { title: 'Congreso 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        { title: 'Congreso 4', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        { title: 'Congreso 5', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
        { title: 'Congreso 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      ],
      type: 'month',
      types: ['month', 'week', 'day'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Dom - Sab', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Lun - Dom', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Lun - Vie', value: [1, 2, 3, 4, 5] },
        { text: 'Lun, Mie, Vie', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
     methods: {
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title1{
  font-family: fantasy !important;
  font-size: 70px !important;
  color: black;
  position: relative;
  left: 42%;
  right: 42%;
  width: 16%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.imagen{
  margin-top: 10px;
}

.titulo{
  color: aliceblue;
}

.descripcion{
  padding-left: 10px;
}

.vcard{
  display: inline-block;
  width: 55%;
  margin-left: 5%;
}

.calendario{
  display: inline-block;
  width: 40%;
}

.contenedor{
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
}




</style>
