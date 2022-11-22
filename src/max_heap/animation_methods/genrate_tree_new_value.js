//This methode for animate how the max heap tree work if inserted a value
function addAnimatedM() {
    //get the element 'background' from id and do som sitting on it.
    let balanceBTDiv = document.getElementById("balancemaxBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    //init the object from the tree visualaizer class.
    let balancemaxBT = treeVisualizer(
        {
            target: "balancemaxBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",

        }

    );
    //call the draw function on the object.
    balancemaxBT.drawData(
        [{
            data: "[50,10,30,5,7,15,20]",
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    //call the next steps function for the animation.
    //This way is the basic one we can improve it later. 
    balancemaxBT.nextStep(
        [{
            data: "[50,10,30,5,7,15,20,60]",
        }], `<div class="d-flex justify-content-center">Insert 60</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[50,10,30,5,7,15,20,60]",
            //boxColor: "[null,null,null,rgb(232,108,46),null,null,null,rgb(232,108,46)]"
        }], `<div class="d-flex justify-content-center"> 60>5 </div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[50,10,30,60,7,15,20,5]",
            // boxColor: "[null,rgb(232,108,46),null,rgb(232,108,46),null,null,null,null]",
        }], `<div class="d-flex justify-content-center">60>10</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[50,60,30,10,7,15,20,5]",
            // boxColor: "[rgb(235,21,21),rgb(235,21,21),null,null,null,null,null,null,null]"
        }], `<div class="d-flex justify-content-center">60>50</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[60,50,30,10,7,15,20,5]",
            // boxColor: "[rgb(235,21,21),rgb(235,21,21),null,null,null,null,null,null,null]"
        }], `<div class="d-flex justify-content-center">Max eap tree</div>`
    )

}