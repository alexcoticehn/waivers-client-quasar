<template>
  <q-page>
    <h3 class="text-center">
        Standings History
    </h3>
    <div class="q-ml-sm">
      <q-form
        data-cy="standings-options-group"
      >
        <q-option-group 
          name="standings-options"
          v-model="history"
          :options="options"
          inline
        />
      </q-form>
    </div>
    <div v-if="history === 'history'">
      <div v-for="year in years" :key="year.id" class="q-mb-lg">
        <standings-table 
          :title="year.header" 
          :rows="year.teams"
        />
      </div>
    </div>
    <div v-else>
      <aggregate-standings-table 
        :rows="aggregate_data"
      />
    </div>
  </q-page>
</template>

<script>
import StandingsTable from '../components/tables/StandingsTable.vue';
import AggregateStandingsTable from 'src/components/tables/AggregateStandingsTable.vue';

const options = [
  {
    label: 'History',
    value: 'history'
  },
  {
    label: 'Aggregate',
    value: 'aggregate'
  }
]

export default {
  components: {
    StandingsTable,
    AggregateStandingsTable
  },
  data() {
    return {
      years: null,
      history: 'history',
      options: options,
      aggregate_data: null
    }
  },
  mounted() {
    this.$store.dispatch('history/getLeagueStandings')
      .then((res) => {
        const standings_bin = this.createStandingsBins(res.data.standings);
        this.years = this.createYears(standings_bin);
        this.createAggregateData(res.data.standings);
      })
  },
  methods: {
    createStandingsBins(standings) {
      const standings_bin = {};
      standings.forEach(element => {
        let year_id = element.year._id;
        if (standings_bin[year_id] === undefined) {
          standings_bin[year_id] = {}
        }
        standings_bin[year_id].start_date = element.year.startDate;
        standings_bin[year_id].end_date = element.year.endDate;

        if (standings_bin[year_id].teams === undefined) {
          standings_bin[year_id].teams = [];
        }

        standings_bin[year_id].teams.push(element);

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
    },
    createAggregateData(standings_data) {
      const aggregate_data = [];
      const aggregate_bins = {};
      standings_data.forEach(element => {
        let team_id = element.team;
        if (aggregate_bins[team_id] == undefined) {
          aggregate_bins[team_id] = {};
        }
        if (aggregate_bins[team_id].rotoPoints == undefined) {
          aggregate_bins[team_id].rotoPoints = 0;
        }
        if (aggregate_bins[team_id].position == undefined) {
          aggregate_bins[team_id].position = 0;
        }
        if (aggregate_bins[team_id].totalSeasons == undefined) {
          aggregate_bins[team_id].totalSeasons = 0;
        }
        aggregate_bins[team_id].rotoPoints += element.points;
        aggregate_bins[team_id].position += element.position;
        aggregate_bins[team_id].totalSeasons++;
      })

      this.$store.dispatch('data/getTeams')
        .then((teams) => {
          teams.forEach(element => {
            let team_id = element.teamId;
            let team_aggregate_data = {};
            team_aggregate_data.avgRotoPoints = aggregate_bins[team_id].rotoPoints / aggregate_bins[team_id].totalSeasons;
            team_aggregate_data.avgPosition = aggregate_bins[team_id].position / aggregate_bins[team_id].totalSeasons;
            team_aggregate_data.teamName = element.teamName;
            team_aggregate_data.ownerName = element.ownerName;
            aggregate_data.push(team_aggregate_data);
          })
          this.aggregate_data = aggregate_data;
        })
    }
  }
}

</script>
