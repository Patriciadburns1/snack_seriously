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
    console.log(this.props);

      // const {Calcium, Calories, Calories from Fat, Carbohydrates, Cholesterol, Dietary fiber, Fat, Iron, Protein, Saturated Fat, Sodium, Sugar, Trans fatty acids, Vitamin A, Vitamin C}  = this.props.nutrients;
      // const calories_from_fat = this.props.nutrients["Calories from Fat"];
      // const dietary_fiber = this.props.nutrients["Dietary Fiber"];
      // const saturated_fat = this.props.nutrients["Saturated Fat"];
      // const trans_fatty_acids =
      const nutrients = this.props.nutrition;
        return(
      <div className="nutritionContainer">
          <section className="performanceFacts">
              <header className="performanceFactsHeader">
                  <h1 className="performanceFactsTitle">Nutrition Facts</h1>
                  <p className="nutritionalText">Serving Size 1/2 cup (about 82g)</p>
                  <p className="nutritionalText">Serving Per Container 8</p>
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

                          <b>Calories</b> {nutrients['Calories']}

                      </th>
                      <td>
                          {/* Calories from Fat 130 */}
                      </td>
                  </tr>
                  <tr className="thickRow">
                      <td colSpan="3" className="smallInfo">
                          <b>% Daily Value*</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Total Fat</b> {nutrients['Fat']}g
                      </th>
                      <td>
                            {Math.ceil((nutrients['Fat']/65) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Saturated Fat {nutrients['Saturated Fat']}g
                      </th>
                      <td>
                         {Math.ceil((nutrients['Saturated Fat']/20) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Trans Fat {nutrients['Trans fatty acids']}g
                      </th>
                      <td>
                        {Math.ceil((nutrients['Trans fatty acids']/20) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Cholesterol </b> {nutrients['Cholesterol']}mg
                      </th>
                      <td>
                          <b>{Math.ceil((nutrients['Cholesterol']/300) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Sodium</b> {nutrients['Sodium']}mg
                      </th>
                      <td>
                          <b>{Math.ceil((nutrients['Sodium']/2400) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Total Carbohydrate</b> {nutrients['Carbohydrates']}g
                      </th>
                      <td>
                          <b>{Math.ceil((nutrients['Carbohydrates']/300) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Dietary Fiber {nutrients['Dietary Fiber']}g
                      </th>
                      <td>
                          <b> {Math.ceil((nutrients['Dietary Fiber']/25) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Sugars {nutrients['Sugar']}g
                      </th>
                      {/*<td>*/}
                         {/*{Math.ceil((total_sugar.value/50) * 100)} %*/}
                      {/*</td>*/}
                  </tr>
                  <tr className="thickEnd">
                      <th colSpan="2">
                          <b>Protein</b> {nutrients['Protein']}g
                      </th>
                      {/*<td>*/}
                         {/*{Math.ceil((protein.value/56) * 100)} %  */}
                      {/*</td>*/}
                  </tr>
                  </tbody>
              </table>

              <table className="performanceFactsTableGrid">
                  <tbody>
                  <tr>
                      <td colSpan="2">
                          Vitamin A {nutrients['Vitamin A']}%
                      </td>
                      <td>
                          Vitamin C {nutrients['Vitamin C']}%
                      </td>
                  </tr>
                  <tr className="thinEnd">
                      <td colSpan="2">
                          Calcium {nutrients['Calcium']}%
                      </td>
                      <td>
                          Iron {nutrients['Iron']}%
                      </td>
                  </tr>
                  </tbody>
              </table>
                {/*maybe delete from here*/}
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