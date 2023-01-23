import { useReducer } from "react";
import produce from "immer";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;

    case SET_VALUE_TO_ADD:
      state.valuetoAdd = action.payload;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valuetoAdd;
      state.valuetoAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initalCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initalCount,
    valuetoAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is{state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valuetoAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button secondary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
