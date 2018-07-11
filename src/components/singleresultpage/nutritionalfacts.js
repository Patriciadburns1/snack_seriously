import React,{Component}from 'react';
import '../../assets/css/nutritionalfacts.css';



class Nutritionalfacts extends Component{
    constructor(props){
        super(props);

            this.state={
                snackItem: []
        }

    }

    render(){
      // const {Calcium, Calories, Calories from Fat, Carbohydrates, Cholesterol, Dietary fiber, Fat, Iron, Protein, Saturated Fat, Sodium, Sugar, Trans fatty acids, Vitamin A, Vitamin C}  = this.props.nutrients;
      const nutrients = this.props.nutrition;
      const servingSize = this.props.size;
      const unit = this.props.unit;
      const weight = this.props.weight;
      const perContainer = this.props.per_container;
        // {nutrients['Trans fatty acids']}
        console.log(nutrients.hasOwnProperty('Trans fatty acids'));

        return(
      <div className="nutritionContainer">
          <section className="performanceFacts">
              <header className="performanceFactsHeader">
                  <h1 className="performanceFactsTitle">Nutrition Facts</h1>
                  <p className="nutritionalText">Serving Size {servingSize} {unit}</p>
                  <p className="nutritionalText">Serving Per Container {perContainer}</p>
                  <p className="nutritionalText">Weight {weight}</p>
              </header>
              <table className="performanceFactsTable">
                  <thead>
                  <tr>
                      <th colSpan="3" className="smallInfo">
                          Amount Per Serving {}
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th colSpan="2">

                          <b>Calories</b> {nutrients.hasOwnProperty('Calories') ? nutrients['Calories'] : 0}

                      </th>
                      <td>
                          <b>Calories from Fat </b>{nutrients.hasOwnProperty('Calories') ? nutrients['Calories from Fat'] : 0} g
                      </td>
                  </tr>
                  <tr className="thickRow">
                      <td colSpan="3" className="smallInfo">
                          <b>% Daily Value*</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Total Fat</b> {nutrients.hasOwnProperty('Fat') ? nutrients['Fat'] : 0}g
                      </th>
                      <td>
                            {nutrients.hasOwnProperty('Fat') ? Math.ceil((nutrients['Fat']/65) * 100) : 0 } %
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Saturated Fat {nutrients.hasOwnProperty('Saturated Fat') ? nutrients['Saturated Fat'] : 0}g
                      </th>
                      <td>
                         {nutrients.hasOwnProperty('Saturated Fat') ? Math.ceil((nutrients['Saturated Fat'] /20) * 100) : 0} %

                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Trans Fat {nutrients.hasOwnProperty('Trans fatty acids') ? nutrients['Trans fatty acids'] : 0}g
                      </th>
                      <td>
                        {nutrients.hasOwnProperty('Trans fatty acids') ? Math.ceil((nutrients['Trans fatty acids']/20) * 100) : 0} %
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Cholesterol </b> {nutrients.hasOwnProperty('Cholesterol') ? nutrients['Cholesterol'] : 0}mg
                      </th>
                      <td>
                          <b>{nutrients.hasOwnProperty('Cholesterol') ? Math.ceil((nutrients['Cholesterol']/300) * 100) : 0} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Sodium</b> {nutrients.hasOwnProperty('Sodium') ? nutrients['Sodium'] : 0}mg
                      </th>
                      <td>
                          <b>{nutrients.hasOwnProperty('Sodium') ? Math.ceil((nutrients['Sodium'] /2400) * 100) : 0} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Total Carbohydrate</b> {nutrients.hasOwnProperty('Carbohydrates') ? nutrients['Carbohydrates'] : 0}g
                      </th>
                      <td>
                          <b>{nutrients.hasOwnProperty('Carbohydrates') ? Math.ceil((nutrients['Carbohydrates']/300) * 100) : 0} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Dietary Fiber {nutrients.hasOwnProperty('Dietary Fiber') ? nutrients['Dietary Fiber'] : 0}g
                      </th>
                      <td>
                          <b> {nutrients.hasOwnProperty('Dietary Fiber') ? Math.ceil((nutrients['Dietary Fiber']/25) * 100) : 0} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Sugars {nutrients.hasOwnProperty('Sugar') ? nutrients['Sugar'] : 0}g
                      </th>
                      <td>
                         {nutrients.hasOwnProperty('Sugar') ? Math.ceil((nutrients ['Dietary Fiber']/50) * 100) : 0} %
                      </td>
                  </tr>
                  <tr className="thickEnd">
                      <th colSpan="2">
                          <b>Protein</b> {nutrients.hasOwnProperty('Protein') ? nutrients['Protein'] : 0}g
                      </th>
                      <td>
                         {nutrients.hasOwnProperty('Protein') ? Math.ceil((nutrients['Protein']/56) * 100) : 0} %
                      </td>
                  </tr>
                  </tbody>
              </table>

              <table className="performanceFactsTableGrid">
                  <tbody>
                  <tr>
                      <td colSpan="2">
                          Vitamin A {nutrients.hasOwnProperty('Vitamin A') ? nutrients['Vitamin A'] : 0}%
                      </td>
                      <td>
                          Vitamin C {nutrients.hasOwnProperty('VItamin C')? nutrients['Vitamin C'] : 0}%
                      </td>
                  </tr>
                  <tr className="thinEnd">
                      <td colSpan="2">
                          Calcium {nutrients.hasOwnProperty('Calcium') ? nutrients['Calcium'] : 0}%
                      </td>
                      <td>
                          Iron {nutrients.hasOwnProperty('Iron') ? nutrients['Iron'] : 0}%
                      </td>
                  </tr>
                  </tbody>
              </table>
              <p className="smallInfo">* Percent Daily Values are based on a 2,000 calorie diet. Your daily
                  values may be higher or lower depending on your calorie needs:</p>

              <table className="performanceFactsTableSmall smallInfo">
                  <thead>
                  <tr>
                      <td colSpan="2"></td>
                      <th>Calories:</th>
                      <th>2,000</th>
                      <th>2,500</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th colSpan="2">Total Fat</th>
                      <td>Less than</td>
                      <td>65g</td>
                      <td>80g</td>
                  </tr>
                  <tr>
                      <td className="blankCell"></td>
                      <th>Saturated Fat</th>
                      <td>Less than</td>
                      <td>20g</td>
                      <td>25g</td>
                  </tr>
                  <tr>
                      <th colSpan="2">Cholesterol</th>
                      <td>Less than</td>
                      <td>300mg</td>
                      <td>300 mg</td>
                  </tr>
                  <tr>
                      <th colSpan="2">Sodium</th>
                      <td>Less than</td>
                      <td>2,400mg</td>
                      <td>2,400mg</td>
                  </tr>
                  <tr>
                      <th colSpan="3">Total Carbohydrate</th>
                      <td>300g</td>
                      <td>375g</td>
                  </tr>
                  <tr>
                      <td className="blankCell"></td>
                      <th colSpan="2">Dietary Fiber</th>
                      <td>25g</td>
                      <td>30g</td>
                  </tr>
                  </tbody>
              </table>

              <p className="smallInfo">
                  Calories per gram:
              </p>
              <p className="smallInfo textCenter">
                  Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
              </p>
        </section>
    </div>
        );
    }
}

export default Nutritionalfacts;