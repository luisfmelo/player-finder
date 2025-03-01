import { BaseEntity, User } from './../../shared';

export const enum GameStatus {
    'ACTIVE',
    'CANCELED',
    'FINISHED',
    'ARCHIEVED'
}

export class Game implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public beginTime?: any,
        public duration?: number,
        public numberOfPlayers?: number,
        public numberOfSlots?: number,
        public gameStatus?: GameStatus,
        public description?: string,
        public location?: BaseEntity,
        public owner?: User,
        public typeOfGame?: BaseEntity,
        public players?: User[],
    ) {
    }
}
