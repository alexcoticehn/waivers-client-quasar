<template>
  <q-table 
    title='Lottery Odds'
    :rows='rows'
    :columns='columns'
    :visible-columns='visibleColumns'
    row-key='team'
    hide-pagination
    :pagination='pagination'
  />
</template>

<script>

const pagination = {
    sortBy: 'odds',
    descending: true,
    rowsPerPage: 0
}

export default {
    name: 'LotteryOddsTable',
    data() {
        return {
            pagination: pagination
        }
    },
    props: {
        columns: Object,
        rows: Object,
        visibleColumns: Array
    }
}
</script>