import { defineComponent } from "vue";
const App = defineComponent({
  name: 'App',
  setup() {
    return () => (
      <router-view></router-view>
    );
  },
});
export default App