import React, {Component} from 'react';
import '../../assets/css/filters.css';
import Allergens from './allergenssection';
import Categories from './categoriessection';
import Nutrients from './nutrientssection';
import { Link } from 'react-router-dom';
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

    // handleFilterSearchClick(context){
    //     console.log("This is working");
    //     console.log(this.props);
    //     console.log("context: ", context);

    //     this.getFilterData(context);
    // }

    // async getFilterData(context){
    //     let URL ='http://api.snackseriously.com/snackapi.php?action=';
    //     // debugger;
    //     try {
    //         const filterData = await axios.get(`${URL}getcategory&filterid=${context.filterID}&categoryid=${context.categoryID}&limit=12&offset=0`);
    //         console.log(filterData);
    //     } catch (err) {
    //         console.log('Get Data Error:', err.message);
    //     }
    // }

    render() {
        return   <SearchDataContext.Consumer>{(context) => (
            <div className="filtersContainer">
                <div className="filtersHeaderContainer" name='show' onClick={context.toggleAllFilter} >
                    <div className="filterBar">Filters</div>
                    <div  className={context.show ? "arrow-down move" : "arrow-down"}></div>
                    <div className="searchButton">
                        <Link className="submitFilter" to={`/MultipleResults/filter/${context.filterID}/category/${context.categoryID}`} onClick={()=>context.handleFilterClick()}> Filter</Link>
                    </div>
                </div>
                <div className={context.show ? "filterPanelContainer active" : "filterPanelContainer"}>
                    <div className={context.allergenShow ? 'filterTab show' : 'filterTab'} onClick={()=>context.toggleFilters('allergenShow','categoryShow')}><div  className={context.allergenShow ? "arrow-down move" : "arrow-down"}>Allergens</div></div>
                    <div className={context.categoryShow ? 'filterTab show' : 'filterTab'} onClick={()=>context.toggleFilters('categoryShow','allergenShow')}><div  className={context.categoryShow? "arrow-down move" : "arrow-down"}>Category</div></div>
                    <Allergens />
                    <Categories  />
                    {/* <Nutrients /> */}
                </div>
            </div>
        ) }</SearchDataContext.Consumer>
    }
}

export default Filters;
