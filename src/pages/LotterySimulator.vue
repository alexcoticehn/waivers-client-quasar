<template>
  <q-page>
    <h3 class="text-center">
      Welcome to the Sailor Jerry's Lottery Simulator!
    </h3>
    <div class="row justify-center q-mb-xl">
      <q-form
        class="form-card"
        @submit="runLottery"
      >
        <submit-button
          label="Run Lottery Simulation"
          id="lottery-submit-btn"
        />
      </q-form>
    </div>
    <div>
      <lottery-odds-table
        :rows='rows'
        :columns='columns'
      />
    </div>
  </q-page>
</template>

<script>
import LotteryOddsTable from "../components/tables/LotteryOddsTable.vue"
import SubmitButton from "../components/buttons/SubmitButton"

const columns = [
    { name: 'team', label: 'Team', field: row => row.team, align: 'left' },
    { name: 'owner', label: 'Owner', field: 'owner', align: 'left' },
    { name: 'odds', label: 'Chance of 1st overall pick', field: row => row.odds, sortable: true, format: val => `${val}%`, align: 'left' }
]

const rows = [
    { team: "Don't Toews Me, Bro", owner: "Alex Cotic-Ehn", odds: 40 },
    { team: "Bustin' Pumpkins", owner: "Michael Winter", odds: 20 },
    { team: "McJesus!", owner: "Jimmy Ghuman", odds: 16 },
    { team: "Big Money", owner: "Peter Bohdal", odds: 12 },
    { team: "Wet Dick Carters", owner: "Ian Carter", odds: 7 },
    { team: "Double Pennertration", owner: "Eric Wallin", odds: 3 },
    { team: "Team Too Good", owner: "Nathan Alvarez", odds: 2 },
    { team: "Dude, Where's Makar?", owner: "Chris Littomericzky", odds: 0 },
    { team: "Wheeler? I Hardly Knew Her", owner: "Harrison Brown", odds: 0 },
    { team: "Don't Be Saad", owner: "Dimitri Filipovic", odds: 0 }
]

export default {
    components: { 
        LotteryOddsTable,
        SubmitButton
    },
    data() {
        return {
            rows: rows,
            columns: columns
        }
    },
    methods: {
        runLottery() {
            console.log('test');
        }
    }
}
</script>