// components/MyLayout.js
import Navbar from './NavBar/Navbar'
import Foot from './Footer/footer.js' ;
import Str from '../hook/GlobalHook.js'
export default function Sign(props) {
  return (
    <div  >
     
      <Str>
      <Navbar/>
      <br/><br/><br/>
      {props.children}
      </Str>
      <Foot/>
    </div>
  )
}