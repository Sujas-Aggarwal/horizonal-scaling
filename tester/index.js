const axios = require("axios");
const ServerCall = () => {
    axios
        .get("http://localhost:3000")
        .then((response) => response.data)
        .then((data) => {
            console.log(data.message);
        }).catch();
};
let i = 0;
for (; i < 1000; i++) {
    ServerCall();
}