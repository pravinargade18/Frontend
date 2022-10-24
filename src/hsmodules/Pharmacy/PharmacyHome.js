/* eslint-disable */
import React, {useState, useEffect, useContext} from "react";
import Pharmacy, {PharmacyList} from "./Pharmacy";
import {UserContext, ObjectContext} from "../../context";
import {Outlet} from "react-router-dom";

export default function PharmacyHome({children}) {
  // const [activeModal, setActiveModal]=useState("modal is-active ")
  const {state, setState} = useContext(ObjectContext);
  const handleCloseModal = () => {
    state.showStoreModal = "modal";
    setState(state);
    console.log(state.showStoreModal);
  };

  return (
    <section className="section remPadTop">
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Pharmacy Module</h1>
            <h2 className="subtitle">Have fun working today!</h2>
          </div>
        </div>
        <div className="layout__content-main">
          {children}
          <Outlet />
        </div>
      </section>
    </section>
  );
}
