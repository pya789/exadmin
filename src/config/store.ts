
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
export interface State {
    userInfo: any
    token: string | null
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state() {
        return {
            userInfo: null,
            token: "12323"
        }
    },
    mutations: {
        setState(state: State, obj: any) {
            (<any>state)[obj.key] = obj.data
        }
    },
    actions: {

    }
})
export function useStore() {
    return baseUseStore(key)
}