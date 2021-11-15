import { api } from 'boot/axios';

export function getTeamData () {
    return api.get('teams');
}
