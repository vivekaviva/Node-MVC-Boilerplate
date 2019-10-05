import app from './App/Providers/RouteServiceProvider';
import { env } from './config/server';

//
require('./config/database');


// function to log every request
const logRequestStart = (req,res,next) => {
    const startHrTime = process.hrtime();
    res.on('finish', () => {
        const elapsedHrTime = process.hrtime(startHrTime);
        const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
        console.info(`Method = ${req.method}; URI = ${req.originalUrl}; ${res.statusCode} ${res.statusMessage}; Elapsed time : ${elapsedTimeInMs}; ${res.get('Content-Length') || 0}b sent`)
    })
    next();
}
app.use(logRequestStart);


app.listen(env.parsed.PORT, () => console.log(`App is running on port ${env.parsed.PORT}`));

