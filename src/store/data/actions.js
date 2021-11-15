import { api } from 'boot/axios';

export function getTeams () {
    return api.get('teams');
}
