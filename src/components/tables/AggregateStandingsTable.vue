<template>
  <q-table 
    data-cy="aggregate-standings-table"
    :columns='columns'
    hide-pagination
    :pagination='pagination'
    flat
  />
</template>

<script>
const columns = [
  { name: 'position', label: 'Average Position', field: row => row.avgPosition, align: 'left', sortable: true },
  { name: 'team', label: 'Team', field: row => row.teamName, align: 'left' },
  { name: 'owner', label: 'Owner', field: row => row.ownerName, align: 'left' },
  { name: 'points', label: 'Average Roto Points', field: row => row.avgRotoPoints, align: 'left', sortable: true }
]

const pagination = {
    sortBy: 'position',
    rowsPerPage: 0,
    descending: false
}

export default {
    name: 'AggregateStandingsTable',
    data() {
      return {
        columns: columns,
        pagination: pagination
      }
    }
}
</script>