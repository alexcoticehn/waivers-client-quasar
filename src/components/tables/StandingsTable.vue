<template>
  <q-table 
    data-cy="yearly-standings-table"
    :columns='columns'
    hide-pagination
    :pagination='pagination'
    flat
  />
</template>

<script>
const columns = [
  { name: 'position', label: 'Position', field: row => row.position, align: 'left' },
  { name: 'team', label: 'Team', field: row => row.teamName, align: 'left' },
  { name: 'owner', label: 'Owner', field: row => row.ownerName, align: 'left' },
  { name: 'points', label: 'Points', field: row => row.points, align: 'left' }
]

const pagination = {
    sortBy: 'position',
    rowsPerPage: 0
}

export default {
    name: 'StandingsTable',
    data() {
      return {
        columns: columns,
        pagination: pagination
      }
    }
}
</script>