<template>
  <q-page>
    <h3 class="text-center">
        Standings History
    </h3>
    <div v-for="year in years" :key="year.id" class="q-mb-lg">
      <standings-table 
        :title="year.header" 
        :rows="year.teams"
      />
    </div>
  </q-page>
</template>

<script>
import StandingsTable from '../components/tables/StandingsTable.vue';

export default {
  components: {
    StandingsTable   
  },
  data() {
    return {
      years: null
    }
  },
  mounted() {
    this.$store.dispatch('history/getLeagueStandings')
      .then((res) => {
        const standings_bin = this.createStandingsBins(res.data.standings);
        this.years = this.createYears(standings_bin);
      })
  },
  methods: {
    createStandingsBins(standings) {
      const standings_bin = {};
      standings.forEach(element => {
        if (standings_bin[element.year._id] === undefined) {
          standings_bin[element.year._id] = {}
        }
        standings_bin[element.year._id].start_date = element.year.startDate;
        standings_bin[element.year._id].end_date = element.year.endDate;

        if (standings_bin[element.year._id].teams === undefined) {
          standings_bin[element.year._id].teams = [];
        }

        standings_bin[element.year._id].teams.push(element);

      });

      return standings_bin;
    },
    createYears(standings_bin) {
      const years = []
      for (const year_id in standings_bin) {
        let year = {};
        year.header = standings_bin[year_id].start_date.slice(0, 4) + '-' + standings_bin[year_id].end_date.slice(0, 4);
        year.id = year_id;
        year.teams = [];
        standings_bin[year_id].teams.forEach(team_data => {
          let team = {};
          team.teamName = team_data.teamName;
          team.ownerName = team_data.ownerName;
          team.points = team_data.points;
          team.position = team_data.position;
          year.teams.push(team);
        })
        years.push(year);
      }
      return years;
    }
  }
}

</script>
