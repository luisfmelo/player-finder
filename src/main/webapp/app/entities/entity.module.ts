import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlayerFinderGameModule } from './game/game.module';
import { PlayerFinderGameTypeModule } from './game-type/game-type.module';
import { PlayerFinderLocationModule } from './location/location.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PlayerFinderGameModule,
        PlayerFinderGameTypeModule,
        PlayerFinderLocationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerFinderEntityModule {}
