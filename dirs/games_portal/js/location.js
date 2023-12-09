// location.js

// Function to fetch user's IP address using ipify API
async function getUserIPAddress() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return null;
    }
  }
  
  // Function to fetch user's geographical coordinates using navigator.geolocation API
  async function getUserGeolocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            console.error('Error getting geolocation:', error);
            reject(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        reject('Geolocation not supported');
      }
    });
  }
  
  // Function to handle the entire process of fetching IP and geolocation
  async function getUserLocation() {
    try {
      const ipAddress = await getUserIPAddress();
      const geolocation = await getUserGeolocation();
  
      if (ipAddress && geolocation) {
        console.log('User IP Address:', ipAddress);
        console.log('User Geographical Location:', geolocation);

      } else {
        console.error('Unable to fetch user location.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to initiate the process
getUserLocation().then(locationData => {
    // After getting the location, call handlePageTasks with location data
    handlePageTasks(locationData);
  });
  
  