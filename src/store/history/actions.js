import { api } from 'boot/axios';

export function getLeagueStandings () {
    return api.get('standings');
}
