import React from 'react';
import data from './merged_data.json'; 


const importRestaurantList = () => {
  return (
    <div>
      <h1>Restaurant List</h1>
      {data.map((restaurant) => (
        <div key={restaurant.objectID} style={{ border: '1px solid #ccc', margin: '20px', padding: '10px' }}>
          <img src={restaurant.image_url} alt={restaurant.name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}, {restaurant.city}, {restaurant.state} {restaurant.postal_code}</p>
          <p><strong>Neighborhood:</strong> {restaurant.neighborhood}</p>
          <p><strong>Cuisine:</strong> {restaurant.food_type}</p>
          <p><strong>Dining Style:</strong> {restaurant.dining_style}</p>
          <p><strong>Price Range:</strong> {restaurant.price_range}</p>
          <p><strong>Rating:</strong> {restaurant.stars_count} stars ({restaurant.reviews_count} reviews)</p>
          <p><strong>Phone:</strong> {restaurant.phone}</p>
          <p><strong>Payment Options:</strong> {restaurant.payment_options.join(', ')}</p>
          <a href={restaurant.reserve_url} target="_blank" rel="noopener noreferrer">Reserve a Table</a>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
