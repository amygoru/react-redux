import {connect} from 'react-redux'
import Home from "../comoponents/Home"
import {addToCart} from '../services/Actions/Actions'

const mapStateToprops=state=>({

})

const mapDispaTochtoprops =dispatch=>(
    {
        addToCartHandler:data=>dispatch(addToCart(data))
    }
)



export default connect(mapStateToprops,mapDispaTochtoprops)(Home)






// export default Home;