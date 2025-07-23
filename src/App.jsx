import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [showModal, setShowModal] = useState(false) ;
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  
     {showModal && (
      <SideBar data={data} handleToggleModal={handleToggleModal} />
     )}
     {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </>
  )
}

export default App