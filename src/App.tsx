/*
 * @Date: 2023-07-17 10:36:30
 * @Author: Bruce Hsu
 * @Description: 
 */

// Custom Imports
import Header from "./containers/Header"
import Content from "./containers/Content"
import Headlines from "./containers/Headlines"


function App() {

  return (
    <div className="dark:bg-zinc-900">
      <Header />
      <Content />
      <Headlines />
    </div>

  )
}

export default App
