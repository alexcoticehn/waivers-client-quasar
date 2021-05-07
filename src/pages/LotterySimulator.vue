<template>
  <q-page>
    <h3 class="text-center">
      Welcome to the Sailor Jerry's Lottery Simulator!
    </h3>
    <div>
      <q-table 
        title='Lottery Odds'
        :rows='rows'
        :columns='columns'
        row-key='team'
        hide-pagination
        :pagination='pagination'
      />
    </div>
  </q-page>
</template>

<script>
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

const pagination = {
    sortBy: 'odds',
    descending: true,
    rowsPerPage: 0
}

export default {
    data() {
        return {
            rows: rows,
            columns: columns,
            pagination: pagination
        }
    }
}
</script>