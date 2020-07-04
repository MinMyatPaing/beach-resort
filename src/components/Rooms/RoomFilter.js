import React, { useContext } from "react";

import { RoomContext } from "../../context";
import Title from "../../pages/Title";

const RoomFilter = ({rooms}) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
  } = context;


  const getUnique = (items, value) => {
      return [...new Set(items.map(item => item[value]))];
  }

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];

  let people = getUnique(rooms, 'capacity');

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* type selection */}
        <div className="form-group">
            <label htmlFor="type">room type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                {types.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
        </div>
        {/* capacity selection */}
        <div className="form-group">
            <label htmlFor="capacity">capacity</label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                {people.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
        </div>
        {/* price selection */}
        <div className="form-group">
            <label htmlFor="price">price ${price}</label>
            <input type="range" min={minPrice} max={maxPrice} value={price} id="price" name="price" 
            onChange={handleChange} className="form-control" />
        </div>
        {/* size selection */}
        <div className="form-group">
            <label htmlFor="size">Room Size</label>
            <input className="size-input" name="minSize" value={minSize} onChange={handleChange} id="size" type="number" />
            <input className="size-input" name="maxSize" value={maxSize} onChange={handleChange} id="size" type="number" />
        </div>
        {/* breakfast and pets selection */}
        <div className="form-group">
            <div className="single-extra">
                <input type="checkbox" name="breakfast" checked={breakfast} id="breakfast" onChange={handleChange} />
                <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
                <input type="checkbox" name="pets" checked={pets} id="pets" onChange={handleChange} />
                <label htmlFor="pets">pets</label>
            </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
