//Listar las bases de datos
show dbs

//seleccionar la base de datos que queremos usar
use tests


// Listar todas las colecciones
show collections

//Crear una nueva collection:

db.createCollection("repaso2")

//Insertar un alumno en la colección de alumnos
db.repaso.insertOne(
    {
        "nombre":"Alberto",
        "edad":23,
        "curso":"2DAM",
        "modulos matriculados" : ["AD", "PMDM", "DI", "PSP"]

    },
    fecha_inserccion = Date()
)

//Insertar varios

db.repaso.insertMany(
    [
            {
        "nombre":"Carlos",
        "edad":23,
        "curso":"1DAM",
        "modulos matriculados" : ["Prog", "ED", "Fundamentos", "LM"]

    },

         {
        "nombre":"Elon",
        "edad":52,
        "curso":"DAW",
        "modulos matriculados" : ["Prog", "ED", "Fundamentos", "LM"],
             ffe:false

    },]
)

//Select basico

db.repaso.find()

//Select por nombre

db.repaso.find(
    {
        "nombre":"Elon"
    }
)

//Filtrado por edad (Operador greater than 25)

db.repaso.find(
    {
        edad:{$gt:25}
    }
)

//Filtrado less than

db.repaso.find(
    {
        edad:{$lt:25}
    }
)

//Ordenación menor a mayor:

    db.repaso.find(
    {
        edad:{$gt:10}
    }
).sort({edad:1})

//Ordenación de mayor a menor
    db.repaso.find(
    {
        edad:{$gt:10}
    }
).sort({edad:-1})

//Mostar solo columnas ffe y nombre

db.repaso.find(
    {
        edad:{$gt:15}
    },
    {
        nombre:1,
        ffe:1
    }
)

//No mostrar la columna id

db.repaso.find(
    {
        edad:{$gt:15}
    },
    {
        nombre:1,
        ffe:1,
        _id:0
    }
)

//Update, primero buscamos el Nombre y luego establecemos el nuevo nombre

db.repaso.updateOne(
    {
        nombre:"Elon"
    },
    {
        $set:{nombre:"Bjorn"}
    }
)

//Si anteriormente no tiene ningún atributo asignado, con una actualización se inserta el atributo
//No da ningún tipo de error

db.repaso.updateOne(
    {nombre: "Carlos"},

    {
        $set:{ffe:true}
    }
)


//Actualizar varios atributos a la vez

    db.repaso.updateMany(
        {},
        [
             {
            $set:{ffe:false}
        },
            {
                $set:{activo:true}
            }

            ]
    )

//Borrado

    db.repaso.deleteOne(
        {nombre:"Carlos"}
    )

//Borrar todos aquellos que tienen una edad de entre 20 y 30

db.repaso.deleteMany({edad:{$gte:20, $lte:30}})

//Buscar con una condición

db.repaso.find(
    {
        $or:[{edad:52}, {edad:23}]
    }
)