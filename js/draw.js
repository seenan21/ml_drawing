const draw ={};

draw.path = (ctx,path, color="black") =>{
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(...path[0]);
    for(let p of path){
        ctx.lineTo(...p);
    }
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
}

draw.paths = (ctx,paths, color="black") =>{
    for(let path of paths){
        draw.path(ctx,path,color);
    }
}