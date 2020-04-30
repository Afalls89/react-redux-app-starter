import React, { useState, useEffect, useReducer, useContext } from "react";
import * as Reducer from "../store/hooks_state/hooks_reducer";
import * as ACTIONS from "../store/actions/actions";
import Context from "../utils/context";

//main app
const HooksContainer1 = () => {
	const context = useContext(Context);

	const [stateValue, setValue] = useState(0);
	const [useEffectValue, setUseEffectValue] = useState(null);
	const [state, dispatch] = useReducer(
		Reducer.HooksReducer,
		Reducer.initialState
	);

	useEffect(
		() => {
			setTimeout(() => setUseEffectValue("useEffect Worked"), 3000);
			console.log(state.stateprop1);
		},
		[stateValue]
	);

	const incrementValue = () => {
		setValue(stateValue + 1);
	};

	const decrementValue = () => {
		setValue(stateValue - 1);
	};

	const changeEffectValue = () => {
		setUseEffectValue("some string");
	};

	const handleDispatchTrue = () => {
		dispatch(ACTIONS.success());
	};

	const handleDispatchFalse = () => {
		dispatch(ACTIONS.failure());
	};

	return (
		<div>
			React Hooks
			<button onClick={() => incrementValue()}> Inc Local State</button>
			<button onClick={() => decrementValue()}> Dec Local State</button>
			<button onClick={() => changeEffectValue()}> Change Use Effect</button>
			<button onClick={() => handleDispatchTrue()}> Dispatch True</button>
			<button onClick={() => handleDispatchFalse()}> Dispatch False</button>
			<button onClick={() => context.addGlobalValue()}>
				{" "}
				Inc Global State
			</button>
			<button onClick={() => context.decGlobalValue()}>
				{" "}
				Dec Global State
			</button>
			<button onClick={() => context.dispatchContextTrue()}>
				{" "}
				DispatchGlobal True
			</button>
			<button onClick={() => context.dispatchContextFalse()}>
				{" "}
				DispatchGlobal False
			</button>
			<br />
			<div>
				<p> {useEffectValue ? <p>{useEffectValue}</p> : <p> No Value </p>}</p>
				<br />
				{state.stateprop1 ? (
					<p>state prop1 is true</p>
				) : (
					<p>state prop1 is false</p>
				)}
				<br />
				<p> Local State: {stateValue}</p>
				<p>Global state: {context.valueGlobalState}</p>
				<br />
				{context.reducerGlobalState ? (
					<p>state prop2 is true</p>
				) : (
					<p>state prop2 is false</p>
				)}
				<br />
			</div>
		</div>
	);
};

export default HooksContainer1;
