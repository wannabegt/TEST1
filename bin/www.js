// app 을 불러올수있도록,,
const app = require("../app");
const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
