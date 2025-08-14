// src/components/GroceryPage.js
import React from "react";

const GroceryPage = () => {
  return (
    <div className="grocery-container">
      <header className="grocery-header">
        <h1>FreshCart Grocery</h1>
        <p>Fresh groceries delivered to your door in 30 minutes!</p>
      </header>
      <section className="grocery-items">
        <h2>Popular Items</h2>
        <div className="items-grid">
          <div className="item-card">
            <img
              src="https://media.istockphoto.com/id/995518546/photo/assortment-of-colorful-ripe-tropical-fruits-top-view.jpg?s=612x612&w=is&k=20&c=_5n0Qf_osohv32NYsdlKVks2XohdlALQCAiXA3qjkDA="
              alt="Fruits"
            />
            <p>Fresh Fruits</p>
          </div>
          <div className="item-card">
            <img
              src="https://media.istockphoto.com/id/139496979/photo/assortment-of-fruits-and-vegetables-background.jpg?s=612x612&w=0&k=20&c=Tns4-67GV8LoJoN9YYwRM9PhpYKQ4kfbWg70_NJc9L8="
              alt="Vegetables"
            />
            <p>Organic Vegetables</p>
          </div>
          <div className="item-card">
            <img
              src="https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.jpg?s=612x612&w=0&k=20&c=U5T70bi24itoTDive1CVonJbJ97ChyL2Pz1I2kOoSRo="
              alt="Dairy"
            />
            <p>Dairy Products</p>
          </div>
          <div className="item-card">
            <img
              src="https://media.istockphoto.com/id/1473199888/photo/salty-snacks-party-mix-an-assortment-of-crispy-appetizers-overhead.jpg?s=612x612&w=is&k=20&c=ttQjOvBAWBm9Dpj5ZZAnOF1n_cJQjNZEJ-J4ghlRt0E="
              alt="Snacks"
            />
            <p>Snacks & Chips</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h3>Start Shopping Now!</h3>
        <button>Order Groceries</button>
      </section>
    </div>
  );
};

export default GroceryPage;
