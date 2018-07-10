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

      const {energy, total_fat, total_saturated_fatty_acids, total_trans_fatty_acids, cholesterol, iron, vitamin_a, vitamin_c, sodium, carbohydrate, protein, total_fiber, total_sugar, calcium  }  = this.props.nutrition;
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

                          <b>Calories</b> {energy.value}

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
                          <b>Total Fat</b> {total_fat.value}{total_fat.unit}
                      </th>
                      <td>
                            {Math.ceil((total_fat.value/65) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Saturated Fat {total_saturated_fatty_acids.value}{total_saturated_fatty_acids.unit}
                      </th>
                      <td>
                         {Math.ceil((total_saturated_fatty_acids.value/20) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Trans Fat {total_trans_fatty_acids.value}{total_trans_fatty_acids.unit}
                      </th>
                      <td>
                        {Math.ceil((total_trans_fatty_acids.value/20) * 100)} %
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Cholesterol </b> {cholesterol.value}{cholesterol.unit}
                      </th>
                      <td>
                          <b>{Math.ceil((cholesterol.value/300) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Sodium</b> {sodium.value}{sodium.unit}
                      </th>
                      <td>
                          <b>{Math.ceil((sodium.value/2400) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <th colSpan="2">
                          <b>Total Carbohydrate</b> {carbohydrate.value}{carbohydrate.unit}
                      </th>
                      <td>
                          <b>{Math.ceil((carbohydrate.value/300) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Dietary Fiber {total_fiber.value}{total_fiber.unit}
                      </th>
                      <td>
                          <b> {Math.ceil((total_fiber.value/25) * 100)} %</b>
                      </td>
                  </tr>
                  <tr>
                      <td className="blankCell">
                      </td>
                      <th>
                          Sugars {total_sugar.value}{total_sugar.unit}
                      </th>
                      {/*<td>*/}
                         {/*{Math.ceil((total_sugar.value/50) * 100)} %*/}
                      {/*</td>*/}
                  </tr>
                  <tr className="thickEnd">
                      <th colSpan="2">
                          <b>Protein</b> {protein.value}{protein.unit}
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
                          Vitamin A {vitamin_a.value}%
                      </td>
                      <td>
                          Vitamin C {vitamin_c.value}%
                      </td>
                  </tr>
                  <tr className="thinEnd">
                      <td colSpan="2">
                          Calcium {calcium.value}%
                      </td>
                      <td>
                          Iron {iron.value}%
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