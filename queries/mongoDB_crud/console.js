db.alumnos.insertOne(
    {
        "nombre":"Alberto",
        "edad":23,
        "curso":"2DAM",
        "modulos matriculados" : ["AD", "PMDM", "DI", "PSP"]

    },
    fecha_inserccion = Date()
)

db.alumnos.find()