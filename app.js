import 'dotenv/config.js'
import createError from 'http-errors'
import  express  from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import './config/database.js';
import cors from 'cors'
import indexRouter from './routes/index.js'
import { __dirname } from './utils.js';
import {google} from 'googleapis'
/* import dayjs from 'dayjs';
 const calendar = google.calendar({
  version : 'v3',
  auth:process.env.GOOGLE_CALENDAR_API
})  */
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* const auth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
)
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

 app.get('/google', (req, res)=>{
  const url = auth2Client.generateAuthUrl({
    access_type:"offline",
    scope:SCOPES
  })
  res.redirect(url)
}) 
 app.get("/google/redirect", async (req, res)=>{
  const code = req.query.code
 const {tokens} = await auth2Client.getToken(code)
 auth2Client.setCredentials(tokens)

 
  res.send({
    msg:'You have successfully logged in'
  })
})

app.get('/schedule_event', async (req, res)=>{
 await calendar.events.insert({
  calendarId:'primary',
  auth:auth2Client,
  requestBody:{
    summary:"evento fulerito",
    description:'Some events',
    start:{
      dateTime:dayjs(new Date()).add(1, 'day').toISOString(),
      timeZone: "Asia/Kolkata"
    },
    end:{
      dateTime:dayjs(new Date()).add(1, 'day').add(1, 'hour').toISOString(),
      timeZone: "Asia/Kolkata"
    }
  }
 })
 res.send({
  msg:"Done"
 })
}) */

app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app
