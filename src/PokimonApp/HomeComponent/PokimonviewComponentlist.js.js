import axios from "axios";
import React, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Pokimon.css";
import { DetailsPokimon, PokimonSearchfilter } from "../ReduxComponent/Reducer";

const PokimonviewComponentlist = () => {
  const [searchPokimon, setSearchPokimon] = useState("");
  console.log(searchPokimon, "searchPokimon");
  const [isSearch, setIssearch] = useState(false);
  console.log(searchPokimon, "searchPokimon");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getPokimonArray = useSelector(
    (state) => state.pokimonReducer.PokimonapiArray
  );
  console.log(getPokimonArray, "getPokimonArray");
  const Pokimoninfo = useSelector(
    (state) => state.pokimonReducer.PokimonDetailArray
  );
  const SearchFilterArray = useSelector(
    (state) => state.pokimonReducer.PokimonSearchArray
  );

  const handelInfobtn = (index_1) => {
    let id = index_1 + 1;

    if (Pokimoninfo.length !== "") {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => {
        console.log(res.data, "data1");
        dispatch(DetailsPokimon(res.data));
      });
      navigate("/pokimonDetails");
    } else {
    }
  };
  const handelInfobtn_2 = (value_2) => {
    if (Pokimoninfo.length !== "") {
      value_2.map((item) => {
        axios.get(item.url).then((res) => {
          console.log(res.data, "jj");

          dispatch(DetailsPokimon(res.data));
        });
        navigate("/pokimonDetails");
      });
    }
  };

  const handelOnchangesearch = (e) => {
    let eventValue = e.target.value;
    setSearchPokimon(eventValue);
    setIssearch(true);

    if (eventValue === "") {
      setIssearch(false);
    } else {
      const mydata = getPokimonArray.map((item) => {
        return {
          ...item,
          results: item.results.filter((nesteditem) => {
            return nesteditem.name
              .toLowerCase()
              .includes(eventValue.toLowerCase());
          }),
        };
      });
      dispatch(PokimonSearchfilter(mydata));
    }
  };
  return (
    <>
      <h1 className="Head-title"> Your Pokimons Are Ready</h1>
      <div className="search-pokimon">
        <input
          onChange={handelOnchangesearch}
          className="search-pokimon "
          type="text"
        />
      </div>
      {!isSearch ? (
        <div className="Pokimon-container">
          {Object.entries(getPokimonArray).map(([key_1, value_1]) => {
            console.log(value_1, "value1");
            return (
              <>
                {Object.entries(value_1.results).map((value_2, index_1) => {
                  console.log(value_2, "value2");

                  return (
                    <>
                      <div className="pokimon_container_item ">
                        {Object.entries(value_2).map(([key_3, value_3]) => {
                          console.log(value_3, "value3");
                          return (
                            <>
                              <h2 className="Text-name">{value_3.name} </h2>
                            </>
                          );
                        })}
                        <h6>
                          <button
                            className="InfoBtn"
                            onClick={() => handelInfobtn(index_1)}
                          >
                            Information{" "}
                          </button>
                        </h6>
                      </div>
                    </>
                  );
                })}

                {Object.entries(value_1).map(([k, v]) => {
                  console.log(v, "v");
                })}
              </>
            );
          })}
        </div>
      ) : (
        <div className="Pokimon-container">
          {Object.entries(SearchFilterArray).map(([key_1, value_1]) => {
            console.log(value_1, "val1");
            return (
              <>
                {Object.entries(value_1.results).map((value_2, index_2) => {
                  // console.log(index_1, "value2");

                  return (
                    <>
                      <div className="pokimon_container_item ">
                        {Object.entries(value_2).map(([key_3, value_3]) => {
                          // console.log(value_3, "value3");
                          return (
                            <>
                              <h2 className="Text-name">{value_3.name} </h2>
                              {/* <button  onClick={() => handelInfobtn2(value_3)}>info</button> */}

                              {/* <a href="">{value_3.url}</a> */}
                            </>
                          );
                        })}

                        <h6>
                          <button
                            className="InfoBtn"
                            onClick={() => handelInfobtn_2(value_2)}
                          >
                            Information{" "}
                          </button>
                        </h6>
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokimonviewComponentlist;
