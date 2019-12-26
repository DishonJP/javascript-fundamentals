try {
    exports.findDistance=(point1,point2)=>{
        let distance=Math.sqrt(Math.pow(point1,point1)+Math.pow(point2,point2));
        return distance;
    }   
} catch (error) {
    console.log(error);
    
}