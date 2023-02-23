import React from "react";
import { useSelector } from "react-redux";
import "../Pokimon.css";

const PokimonDetails = () => {
  const Pokimoninfo = useSelector(
    (state) => state.pokimonReducer.PokimonDetailArray
  );

  return (
    <div className="Pokimondetail-container">
      <div className="PokimonDetail-itme">
        {Object.entries(Pokimoninfo)?.map(([key, value]) => {
          console.log(value.id, "valuep");

          return (
            <>
              <div className="image-section">
                <img
                  src={value.sprites.back_default}
                  alt=""
                  width="400px"
                  height="300px"
                />
              </div>

              <table className="Table-pokimon">
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>Type</th>
                  <th>Skills</th>
                </tr>
                <tr>
                  <td>{value.id}</td>
                  {Object.entries(value.forms)?.map(([key2, value2]) => {
                    console.log(value2, "kk");
                    return (
                      <>
                        <td>{value2.name}</td>

                        {Object.entries(value2).map(([key4, value4]) => {
                          console.log(value4, "value4");
                        })}
                      </>
                    );
                  })}

                  <td>{value.height}cm</td>

                  <td>{value.weight}kg</td>

                  {Object.entries(value.stats)?.map(([key3, value3]) => {
                    console.log(value3, "gg");
                  })}

                  {Object.entries(value.types).map(([keyType, valueType]) => {
                    console.log(valueType.type, "valueType");
                    return (
                      <>
                        <td>{valueType.type.name}</td>
                      </>
                    );
                  })}

                  {Object.entries(value.abilities)?.map(
                    ([keyAbiliti, valueAbiliti]) => {
                      console.log(valueAbiliti.ability, "valueAbiliti");
                      return (
                        <>
                          {" "}
                          <td>{valueAbiliti.ability.name}</td>
                        </>
                      );
                    }
                  )}
                </tr>
              </table>
            </>
          );
        })}
      </div>
      
    </div>
  );
};

export default PokimonDetails;
