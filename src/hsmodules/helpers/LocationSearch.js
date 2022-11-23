import React, { useState, useContext, useEffect, useRef } from 'react';
//import {Route, Switch,   Link, NavLink, } from 'react-router-dom'
import client from '../../feathers';
import { DebounceInput } from 'react-debounce-input';
//import { useForm } from "react-hook-form";
//import {useNavigate} from 'react-router-dom'
import { UserContext, ObjectContext } from '../../context';
import { toast } from 'bulma-toast';
import { formatDistanceToNowStrict, format } from 'date-fns';
import DebouncedInput from '../Appointment/ui-components/inputs/DebouncedInput';
// eslint-disable-next-line
//const searchfacility={};

export default function LocationSearch({ id, getSearchfacility, clear }) {
  const ClientServ = client.service('location');
  const [facilities, setFacilities] = useState([]);
  // eslint-disable-next-line
  const [searchError, setSearchError] = useState(false);
  // eslint-disable-next-line
  const [showPanel, setShowPanel] = useState(false);
  // eslint-disable-next-line
  const [searchMessage, setSearchMessage] = useState('');
  // eslint-disable-next-line
  const [simpa, setSimpa] = useState('');
  // eslint-disable-next-line
  const [chosen, setChosen] = useState(false);
  // eslint-disable-next-line
  const [count, setCount] = useState(0);
  const inputEl = useRef(null);
  const [val, setVal] = useState('');
  const { user } = useContext(UserContext);
  const { state } = useContext(ObjectContext);
  const [productModal, setProductModal] = useState(false);
  const [closeDropdown, setCloseDropdown] = useState(false);

  const getInitial = async (id) => {
    if (!!id) {
      await ClientServ.get(id)
        .then((resp) => {
          handleRow(resp);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getInitial(id);
    return () => {};
  }, []);

  const handleRow = async (obj) => {
    await setChosen(true);
    //alert("something is chaning")
    getSearchfacility(obj);

    await setSimpa(obj.name + ' ' + obj.locationType);

    // setSelectedFacility(obj)
    setShowPanel(false);
    await setCount(2);
    /* const    newfacilityModule={
            selectedFacility:facility,
            show :'detail'
        }
   await setState((prevstate)=>({...prevstate, facilityModule:newfacilityModule})) */
    //console.log(state)
  };

  const handleBlur = async (e) => {
    /*   if (count===2){
             console.log("stuff was chosen")
         } */
    /*  console.log("blur")
         setShowPanel(false)
        console.log(JSON.stringify(simpa))
        if (simpa===""){
            console.log(facilities.length)
            setSimpa("abc")
            setSimpa("")
            setFacilities([])
            inputEl.current.setValue=""
        }
        console.log(facilities.length)
        console.log(inputEl.current) */
  };
  const handleSearch = async (val) => {
    setVal(val);
    if (val === '') {
      setShowPanel(false);
      getSearchfacility(false);
      return;
    }
    const field = 'name'; //field variable
    /* name: { type: String, required: true },
        locationType: { type: String }, */

    if (val.length >= 3) {
      ClientServ.find({
        query: {
          $or: [
            {
              name: {
                $regex: val,
                $options: 'i',
              },
            },
            {
              locationType: {
                $regex: val,
                $options: 'i',
              },
            },
            /*    { middlename: {
                        $regex:val,
                        $options:'i' 
                    }},
                    { phone: {
                        $regex:val,
                        $options:'i' 
                    }},
                    { clientTags: {
                        $regex:val,
                        $options:'i' 
                    }},
                    { mrn: {
                        $regex:val,
                        $options:'i' 
                    }},
                    { specificDetails: {
                        $regex:val,
                        $options:'i' 
                    }}, */
          ],

          facility: user.currentEmployee.facilityDetail._id,
          //storeId: state.StoreModule.selectedStore._id,
          $limit: 10,
          $sort: {
            createdAt: -1,
          },
        },
      })
        .then((res) => {
          console.log('product  fetched successfully');
          console.log(res.data);
          setFacilities(res.data);
          setSearchMessage(' product  fetched successfully');
          setShowPanel(true);
        })
        .catch((err) => {
          toast({
            message: 'Error creating ProductEntry ' + err,
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
          });
        });
    } else {
      console.log('less than 3 ');
      console.log(val);
      setShowPanel(false);
      await setFacilities([]);
      console.log(facilities);
    }
  };

  const handleAddproduct = () => {
    setProductModal(true);
  };
  const handlecloseModal = () => {
    setProductModal(false);
    handleSearch(val);
  };
  useEffect(() => {
    if (clear) {
      console.log('success has changed', clear);
      setSimpa('');
    }
    return () => {};
  }, [clear]);
  return (
    <div>
      <div className="field">
        <div className="control has-icons-left  ">
          <div
            className={`dropdown ${showPanel ? 'is-active' : ''}`}
            style={{ width: '100%' }}
          >
            <div className="dropdown-trigger" style={{ width: '100%' }}>
              <DebouncedInput
                label="Search for location"
                value={simpa}
                minLength={3}
                onBlur={handleBlur}
                onChangeValue={handleSearch}
                inputRef={inputEl}
                style={{ height: '38px' }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <div className="dropdown-menu expanded" style={{ width: '100%' }}>
              <div className="dropdown-content">
                {/* {facilities.length > 0 ? (
                  ''
                ) : (
                  <div
                    className="dropdown-item selectadd"
                  >
                    {' '}
                    <span> {val} is not a location in your facility</span>{' '}
                  </div>
                )} */}

                {facilities.map((facility, i) => (
                  <div
                    className="dropdown-item selectadd "
                    key={facility._id}
                    onClick={() => {
                      handleRow(facility), setCloseDropdown(true);
                    }}
                  >
                    <div style={{ cursor: 'pointer' }}>
                      {closeDropdown ? (
                        <></>
                      ) : (
                        <>
                          {/* <span>{facility.firstname}</span> */}
                          <span className="padleft">{facility.name}</span>
                          <span className="padleft">
                            {facility.locationType}
                          </span>
                          {/* <span className="padleft"> {facility.dob && formatDistanceToNowStrict(new Date(facility.dob))}</span>
                                        <span className="padleft">{facility.gender}</span>
                                        <span className="padleft">{facility.profession}</span>
                                        <span className="padleft">{facility.phone}</span> */}
                          {/* <span className="padleft">{facility.email}</span> */}
                        </>
                      )}
                    </div>

                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`modal ${productModal ? 'is-active' : ''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Choose Store</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handlecloseModal}
            ></button>
          </header>
          <section className="modal-card-body">
            <StoreList standalone="true" />
            <ProductCreate />
          </section>
          <footer className="modal-card-foot">
                                        <button className="button is-success">Save changes</button>
                                        <button className="button">Cancel</button>
                                        </footer>
        </div>
      </div> */}
    </div>
  );
}
