import React, {Component} from 'react';
import '../../assets/css/filters.css';
import Allergens from './allergenssection';
import Categories from './categoriessection';
import Nutrients from './nutrientssection';
import { Link } from 'react-router-dom';
import Axios from '../../../node_modules/axios';
import { SearchDataContext } from '../searchdata';

class Filters extends Component {
    
    constructor(props){
        super(props);
    //     this.state = {
    //         show: false,
    //         allergenShow: false,
    //         categoryShow: false,
    //         allegenIndex: null
    //     }
     }

    // toggleAllFilter() {
    //     //const { show, allergenShow, categoryShow } = this.state;
    //     const{show} = this.state;
    //     this.setState({
    //         show:!show
    //     });
    // }

    // toggleFilters( clickTab, oppositeTab) {

    //     //clickTab is name of tab clicked
    //     //oppositeTab is thee other tab not in use
    //     const clickedTabBool = !this.state[clickTab];

    //     //set key and value 
    //     //[clickTab] is replaced with string of clickedTab and the value is opposite of original value
    //     //set [oppositeTab] to false since no longer in use. 
    //     this.setState({
    //         [clickTab]:clickedTabBool,
    //         [oppositeTab]:false
    //     });
    // }

    handleFilterSearchClick(context){
        console.log("This is working");
        console.log(this.props);
        this.getFilterData(context);
    }

    async getFilterData(context){
        let URL ='http://api.snackseriously.com/snackapi.php?action=';
        const {filterID, categoryID} = context;
        try {
            const filterData = await Axios.get(`${URL}getcategory&filterid=${filterID}&categoryid=${categoryID}&limit=12&offset=0`);
            console.log(filterData);
        } catch (err) {
            console.log('Get Data Error:', err.message);
        }
    }

    render() {
        // const {show, allergenShow, categoryShow, allergenIndex, toggleAllFilter, toggleFilters} = context;
        return   <SearchDataContext.Consumer>{(context) => (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer" name='show' onClick={context.toggleAllFilter} >
                    <div>Filters</div>
                    <button onClick={this.handleFilterSearchClick.bind(this)}>Search</button>
                    {/* <Link to={`/MultipleResults/${userChoices}`}><div>Search</div></Link> */}
                </div>
                
                <div className={context.show ? "filterPanelContainer active" : "filterPanelContainer"}>
                    <div className={context.allergenShow ? 'filterTab show' : 'filterTab'} onClick={()=>context.toggleFilters('allergenShow','categoryShow')}>Allergens</div>
                    <div className={context.categoryShow ? 'filterTab show' : 'filterTab'} onClick={()=>context.toggleFilters('categoryShow','allergenShow')}>Category</div>
                    <Allergens visible={context.allergenShow} index={context.allergenIndex}/>
                    <Categories visible={context.categoryShow} />
                    {/* <Nutrients /> */}
                </div>
            </div>
        ) }</SearchDataContext.Consumer>
    }
}

export default Filters;
