//This methode for animate how the min heap tree work if inserted a value
function addAnimeted() {
    //Init the back ground and do some setting on it.
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    //Init the object from the Tree visualizer class.
    let balanceBT = treeVisualizer(
        {
            target: "balanceBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",


        }
    );

    //Call the draw funcrion
    balanceBT.drawData(
        [{
            data: "[5,7,15,50,10,30,20]",
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    //Call the next step function.
    //This way is the basic one we can improve it later.
    //first step animated
    balanceBT.nextStep(
        [{
            data: "[5,7,15,50,10,30,20,3]",
        }], `<div class="d-flex justify-content-center">Insert 3</div>`
    )//second step animated
    balanceBT.nextStep(
        [{
            data: "[5,7,15,3,10,30,20,50]",
            //boxColor: "[null,null,null,rgb(232,108,46),null,null,null,rgb(232,108,46)]"
        }], `<div class="d-flex justify-content-center">swich between the child 3 and the parent 5</div>`
    )//third step animated
    balanceBT.nextStep(
        [{
            data: "[5,3,15,7,10,30,20,50]",
            // boxColor: "[null,rgb(232,108,46),null,rgb(232,108,46),null,null,null,null,null]",
        }], `<div class="d-flex justify-content-center">swich between the child 3 and the parent 10</div>`
    )//forth step animated
    balanceBT.nextStep(
        [{
            data: "[3,5,15,7,10,30,20,50]",
            // boxColor: "[rgb(235,21,21),rgb(235,21,21),null,rgb(232,108,46),null,null,null,rgb(228,108,46)]"
        }], `<div class="d-flex justify-content-center">swich between the child 3 and the parent 50</div>`
    )//fifth step animated
    balanceBT.nextStep(
        [{
            data: "[3,5,15,7,10,30,20,50]",
            // boxColor: "[rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127)]",
        }], `<div class="d-flex justify-content-center">done</div>`
    )
}


