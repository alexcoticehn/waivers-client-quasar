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
    <q-dialog v-model="lotteryResults">
      <q-card>
        <q-card-section>
          <div class="text-h6">You have simulated the Sailor Jerry's Draft Lottery!</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          1. {{ lotteryWinners[0] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          2. {{ lotteryWinners[1] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          3. {{ lotteryWinners[2] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          4. {{ lotteryWinners[3] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          5. {{ lotteryWinners[4] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          6. {{ lotteryWinners[5] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          7. {{ lotteryWinners[6] }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          8. Big Money
        </q-card-section>
        <q-card-section class="q-pt-none">
          9. Dude, Where's Makar?
        </q-card-section>
        <q-card-section class="q-pt-none">
          10. Don't Be Saad
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Run Lottery Again" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div>
      <lottery-odds-table
        :rows='rows'
        :columns='columns'
        :visible-columns="['team', 'owner', 'odds']"
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
    { name: 'odds', label: 'Chance of 1st overall pick', field: row => row.odds, sortable: true, format: val => `${val}%`, align: 'left' },
    { name: 'rangeMax', label: 'rangeMax', field: row => row.rangeMax, required: false }
]

const rows = [
    { team: "Rock Out With Your Dach Out", owner: "Alex Cotic-Ehn", odds: 20, rangeMax: 60 },
    { team: "Bustin' Pumpkins", owner: "Michael Winter", odds: 40, rangeMax: 40 },
    { team: "McJesus!", owner: "Jimmy Ghuman", odds: 16, rangeMax: 76 },
    { team: "Big Money", owner: "Peter Bohdal", odds: 0, rangeMax: 101 },
    { team: "The Wet Dick Carters", owner: "Ian Carter", odds: 3, rangeMax: 98 },
    { team: "Double Pennertration", owner: "Eric Wallin", odds: 2, rangeMax: 100 },
    { team: "Team Too Good", owner: "Nathan Alvarez", odds: 12, rangeMax: 88 },
    { team: "Dude, Where's Makar?", owner: "Chris Littomericzky", odds: 0, rangeMax: 101 },
    { team: "Wheeler? I Hardly Knew Her!", owner: "Harrison Brown", odds: 7, rangeMax: 95 },
    { team: "Don't Be Saad", owner: "Dimitri Filipovic", odds: 0, rangeMax: 101 }
]

export default {
    components: { 
        LotteryOddsTable,
        SubmitButton
    },
    data() {
        return {
            rows: rows,
            columns: columns,
            lotteryResults: false,
            lotteryWinners: []
        }
    },
    methods: {
        runLottery() {
            let winningTeam;
            this.lotteryWinners = [];
            let randomVal;
            while (this.lotteryWinners.length < 7) {
                winningTeam = {rangeMax: 101};
                randomVal = Math.random() * 100;
                rows.forEach((team) => {
                    if (randomVal < team.rangeMax && team.rangeMax < winningTeam.rangeMax) {
                        winningTeam = team;
                    }
                })
                if (!this.lotteryWinners.includes(winningTeam.team)) {
                    this.lotteryWinners.push(winningTeam.team);
                }
            }

            this.lotteryResults = true;
        }
    }
}
</script>