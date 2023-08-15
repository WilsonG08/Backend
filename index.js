import app from './src/server'
import connection from './src/database';



connection()
app.listen(app.get('port'),()=>{
    console.log(`Server ok on http://localhost:${app.get('port')}`);
})


