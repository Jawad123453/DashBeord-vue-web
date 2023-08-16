<template>
  <div class="dashboerd">
    <v-subheader class="d-flex justify-space-between align-center mb-5">
      <h3>Dashboerd</h3>
      <v-btn color="success" rounded-lg>
        Veiw Orders
      </v-btn>
    </v-subheader>
    <v-row>
      <v-col cols="12" lg="7">
        <v-alert dense type="success" class="mb-5">
          <strong>Login Successfully</strong> Good Morning
        </v-alert>
        <v-row>
        <v-col cols="6" v-for="(action,index) in activaors" :key="index">
          <v-card elevation="3" rounded-lg>
            <v-card-text class="d-flex justify-space-between align-center flex-column flex-sm-row">
              <div class="d-flex flex-column changethe text-sm-start text-center">
                <strong>{{action.title}}</strong>
                <small>Last 2 weeks</small>
              </div>
              <v-avatar :color="action.color" size="60">
                <span>{{action.amounts}}</span>
              </v-avatar>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card>
        <v-card-title>Activities</v-card-title>
          <v-timeline side="end" align="start">
          <v-timeline-item
            dot-color="pink"
            size="small"
          >
            <div class="d-flex flex-column">
              <strong class="me-4">30 Minuts ago</strong>
                <small>You have a new order pieses check this out</small>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="teal-lighten-3"
            size="small"
          >
          <div class="d-flex flex-column">
              <strong class="me-4">50 Minuts ago</strong>
                <small>Web App</small>
            </div>
          </v-timeline-item>

          <v-timeline-item
            dot-color="pink"
            size="small"
          >
          <div class="d-flex flex-column">
              <strong class="me-4">80 Minuts ago</strong>
                <small>Mobile App</small>
            </div>
          </v-timeline-item>
        </v-timeline>
        </v-card>        
      </v-col>
    </v-row>
    
    <div class="mt-7">
      <strong class="text-center">Recent Orders</strong>
      <v-table>  
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
        <th class="text-left">
          Fats(g)
        </th>
        <th class="text-left">
          Carbs(g)
        </th>
        <th class="text-left">
          Protein(g)
        </th>
        <th class="text-left">
          Iron(%)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.fats }}</td>
        <td>{{ item.carbs }}</td>
        <td>{{ item.protein }}</td>
        <td>{{ item.iron }}</td>
      </tr>
    </tbody>
  </v-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const activaors=[
  {title:"Total Products",color:"red",amounts:3423},
  {title:"Total Catigory",color:"purple",amounts:23},
  {title:"Total Orders",color:"indigo",amounts:423},
  {title:"Pending Orders",color:"light-blue",amounts:3423},
]

const desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Eclair',
            calories: 262,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'Donut',
            calories: 452,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
          {
            name: 'KitKat',
            calories: 518,
            fats: 159,
            carbs: 159,
            protein: 159,
            iron: 159,
          },
        ]
</script>

<style scoped>
</style>