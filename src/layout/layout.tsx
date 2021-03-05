import "../layout/layout.css"
export default {
  setup() {
    function Header() {
      return <div class="header">Header</div>
    }
    function Aside() {
      return <div class="aside">Aside</div>
    }
    function Main() {
      return <div class="main"><router-view></router-view></div>
    }

    return () => (
      <div class="layout">
        <Aside></Aside>
        <div class="layout-header-main">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    )
  }
}


