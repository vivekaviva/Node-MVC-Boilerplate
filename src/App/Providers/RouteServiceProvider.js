
import { app } from '../../config/server';

app.use('/',require('../../routes/auth'));
app.use('/api/v1/',require('../../routes/api'));

module.exports = app;