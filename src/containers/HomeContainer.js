import Home from '../comoponents/Home'
import {connect} from 'react-redux'
import {addToCart} from '../services/Actions/Actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;