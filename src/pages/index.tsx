import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../config/store"
import { ElButton } from "element-plus";

export default {
  components: {
    ElButton
  },
  setup() {
    const name = ref("跳转home");
    const router = useRouter();
    const store = useStore();
    function rHome(): void {
      router.push({
        name: "home",
      });
    }
    function setToken() {
      store.commit('setState', { key: 'token', data: 123123123123 })
      store.commit('setState', { key: 'userInfo', data: { name: "aaaa", age: 125 } })
    }
    function Header() {
      return <p>我是头部</p>
    }
    function Main() {
      return <router-view></router-view>
    }
    return () => (
      <div>
        <Header></Header>
        <Main></Main>
        <el-button onClick={rHome} >{name.value}</el-button>
        <el-button onClick={setToken} >获取token</el-button>
      </div>
    )
  }
}

