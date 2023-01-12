const ele=document.getElementById("rect")

const canvas=new fabric.Canvas('canvas')


const rect=new fabric.Rect({
    top:100,
    left:100,
    width:60,
    height:70,
    fill:'purple',
    angle:'150'
})

const circle=new fabric.Circle({
    top:50,
    left:50,
    radius:45,
    fill:'red',
    bordercolor:'purple'
})

const triangle=new fabric.Triangle({
    top:40,
    left:100,
    fill:'blue'
})
canvas.add(circle,rect)