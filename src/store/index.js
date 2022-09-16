import stateA from './modulesA/state'
import gettersA from './modulesA/getters'
import mutationsA from './modulesA/mutations'
import actionsA from './modulesA/actions'

import stateB from './modulesB/state'
import gettersB from './modulesB/getters'
import mutationsB from './modulesB/mutations'
import actionsB from './modulesB/actions'

import stateG from './modulesGeneral/state'
import gettersG from './modulesGeneral/getters'
import mutationsG from './modulesGeneral/mutations'
import actionsG from './modulesGeneral/actions'

const modulesA = {
    state: () => stateA,
    gettersA,
    mutationsA,
    actionsA,
}
const modulesB = {
    state: () => stateB,
    gettersB,
    mutationsB,
    actionsB,
}

export default {
    // modules: {
    //     a: modulesA,
    //     b: modulesB
    // },
    state: stateG,
    getters: gettersG,
    mutations: mutationsG,
    actions:actionsG,
}

