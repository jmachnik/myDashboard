import {logout} from "../../actions";
import HeaderView from "./HeaderView";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        username: state.authorization.name
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => {
        dispatch(logout())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderView);