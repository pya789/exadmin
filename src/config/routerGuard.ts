import router from "./router"
import { store } from "./store"
const noLoginName: string[] = ['login']
router.beforeEach(async (to: any, from: any) => {
    console.log(to);
    if (noLoginName.includes(to.name)) {
        return true
    }
    console.log(store.state.token);
    if (store.state.token == null) {
        router.push({
            name: "login"
        })
    }
})
router.beforeResolve(async (to: any, from: any) => {

})
export default router