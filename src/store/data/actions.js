import { api } from 'boot/axios';

export function getTeams (context) {
    if (context.state.teams.length != 0) {
        return context.state.teams;
    }
    return api.get('teams')
        .then((res) => {
            let teams = [];
            res.data.teams.forEach(element => {
                let team_data = {};
                team_data.teamId = element._id;
                team_data.teamName = element.name;
                team_data.prospectTeamName = element.name_prospect;
                team_data.ownerName = element.owner.firstname + " " + element.owner.lastname;
                teams.push(team_data);
            })
            context.commit('setTeams', teams);
            return context.state.teams;
        })
}
