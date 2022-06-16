function milesToKm() {
  let miles = Number(document.getElementById("userMiles").value)
  let km = miles * 1.609344
  if (miles === 1) {
    document.getElementById("result").innerHTML = `${miles} mile is equal to <span class="km">${km} kilometers</span>.`
  } else if (km === 1) {
    document.getElementById("result").innerHTML = `${miles} miles is equal to <span class="km">${km} kilometer</span>.`
  } else {
      document.getElementById("result").innerHTML = `${miles} miles is equal to <span class="km">${km} kilometers</span>.`
    }
  }
  
  
