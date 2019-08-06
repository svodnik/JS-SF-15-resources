
'use strict';

const zipLookup = (() => {

  const zip = document.querySelector('#zip'); 
  const locationPara = document.querySelector('#location');
  let city;
  let state;

  const getLocation = (data) => {
    city = data.places[0]['place name'];
    state = data.places[0]['state'];
  };

  const updateUISuccess = (data) => {
    zip.value = '';
    locationPara.textContent = `${city}, ${state}`;
  };

  const updateUIError = () => {
    locationPara.textContent = 'Please try again in a bit.';
  };

  const getData = (zip) => {
    fetch('http://api.zippopotam.us/us/' + zip)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          updateUIError();
        }
      })
      .then(function(data) {
        return getLocation(data);
      })
      .then(function(data) {
        return updateUISuccess(data);
      })
      .catch(function(error) {
        return updateUIError();
      });
  };

  const checkInput = () => {
    const zipString = zip.value; 
    if (zipString.length === 5) {
      getData(zipString);
    } 
  };

  return {
    check: checkInput
  };
})();

const zip = document.querySelector("#zip"); 
zip.addEventListener("keyup", zipLookup.check);