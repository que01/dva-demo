import './index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva();

app.model(require("./models/common"));

app.model(require("./models/11"));

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
