import Color from '../database/models/color.js'

export const listarColores = async(req, res)=>{
    try {
        const colores = await Color.find()
        res.status(200).json(colores)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error al buscar los colores'})
    }
}

export const crearColor = async(req, res)=>{
    try {
        const colorNuevo = new Color(req.body);
        await colorNuevo.save();
        res.status(201).json(
            {mensaje:'El color fue creado exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje:'El color no pude ser creado'})
    }
}

export const obtenerColor = async(req, res)=>{
    try {
        console.log(req.params.id)
        const colorBuscado = await Color.findById(req.params.id)
        if(!colorBuscado){
            return res.status(404).json({mensaje: 'No se encontro la color con el id enviado'})
        }
        res.status(200).json(colorBuscado)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'No se pudo encontrar el color solicitado'})
    }
}

export const editarColor = async(req, res)=>{
    try {
         const colorBuscado = await Color.findById(req.params.id)
         if(!colorBuscado){
            return res.status(404).json({mensaje: 'No se encontro el color a editar'})
         }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: 'Color editado con exito'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error interno en la solicitud, no se edito el color'})
    }
}

export const borrarColor = async(req, res)=>{
    try {
         const colorBuscado = await Color.findById(req.params.id)
         if(!colorBuscado){
            return res.status(404).json({mensaje: 'No se borró el color'})
         }
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'Color borrado con exito!'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error interno en la solicitud, no se edito el color'})
    }
}