

    exports.toFindDelta=(a,b,c)=>{
        try {
        let delta=(b*b)-(4*a*c);
        console.log(delta);
        
        if (isNaN(delta)) {
            return NaN;
        } else {
            return delta;
        }
        }
        catch (error) {
            console.log(error);
            
        }
        
    }
    exports.toFindRoot1=(delta,a,b)=>{
        try {
            let x1=(-b+Math.sqrt(delta))/(2*a);
        console.log("value of x1",x1);
        if (isNaN(x1)) {
            return NaN;
        } else {
            return x1;
        }
        } catch (error) {
            console.log(error);
            
        }
        
    }
    exports.toFindRoot2=(delta,a,b)=>{
        try {
            let x2=(-b-Math.sqrt(delta))/(2*a);
        if (isNaN(x2)) {
            return NaN;
        } else {
            return x2;
        }
        } catch (error) {
            console.log(error);
            
        }
        
    }
    exports.toFindEquation=(x1,x2,a,b,c)=>{
        try {
            let equation= a*x1*x2+b*x1+c;
        if (isNaN(equation)) 
        {
            return NaN;
        } else {
            return equation;
        }
        } catch (error) {
            console.log(error);
            
        }
        
    }
