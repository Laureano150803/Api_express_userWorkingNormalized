const checktoken = (req, res)=>{
    return res.status(200).json({
        Response:'Authorized'
    })
}
export default checktoken