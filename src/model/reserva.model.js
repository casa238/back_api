// const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');
// const User = require('./usuario.model');
// const Habitacion = require('./habitacion.model');


let reservaSchema = new Schema({
    
    // id: {type: Object},
    // iduser: {type: String, required: true},
   
    nombreReserva:  { type: String },
    huesped: { type: Number, required: true },
    fecha_entrada: { type: String, required: true },
    fecha_salida: { type: String, required: true },
    // habitacions: [{idNum_hab: String, num_hab: String, tipo_hab: String, precio: Number, total_hab: Number, disponible: Boolean}],
    habitacion: {type: String},
    // date: {type: Date, default: new Date(2021-12-3)}
    
    
});


// reservaSchema.pre('save', async function(next){
    // if(this.isModified('products') || this.isNew){
        // const document = this;
        // const idUser = document.iduser;
        // const habitacions = document.habitacions;

        // const fecha_entrada = document.fecha_entrada;
        // const fecha_salida = document.fecha_salida;
        
        // document.total = 0;

        // let user;
        // let promises = [];


        // try{
        //      user = await User.findById(idUser);
        // }catch(ex){
        //     next(new Error(`The user with ID '${idUser}' does not exist`));
        //      next(ex);
        //  }

        // try{
            
        //     if(habitacions.length == 0){
        //         //products list is empty
        //         next();
        //     }else{
                
               
        //         for(item of habitacions){
        //             promises.push(Habitacion.findById(item.idNum_hab));
        //         }
           
                
                  
                // const resultPromises = await Promise.all(promises);
    
                // console.log('res promises',resultPromises);
       
        

    
                // resultPromises.forEach( ( habitacion, index ) => {
                    // document.fecha_entrada[index].fecha_entrada = fecha_entrada;
                    // document.fecha_salida[index].fecha_salida = fecha_salida;
                    // document.habitacions[index].tipo_hab = habitacion.tipo_hab;
                    // document.habitacions[index].num_hab = habitacion.num_hab;
                    // if(document.habitacions[index].tipo_hab == 'sencilla'){
                    //     //products list is empty
                        
                    //     console.log("habitacion ",document.habitacions[index].tipo_hab)
                        
                        
                    // }else{
                    //     console.log("no es la condicion")
                    // }


                    // document.habitacions[index].precio = habitacion.precio;
                    // document.habitacions[index].disponible = habitacion.disponible;
                    // document.habitacions[index].disponibilidad = habitacion.disponibilidad;
                // });
            // }
            
        // }catch(ex){
            // next();
        // }

        
    // }else{
    //     next();
    // }
// });


const Reserva = mongoose.model('Reserva', reservaSchema);


module.exports = Reserva;