//this methode for animate how the tree work if removed a value
function removeAnimeted() {
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)";
    let balanceBT = treeVisualizer(
        {
            target: "balanceBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",
        }
    );
    //draw the tree

    balanceBT.drawData(
        [{
            data: "[3,5,4,10,8,17,11,13,12]",
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    //first step animated
    balanceBT.nextStep(
        [{
            data: "[12,5,4,10,8,17,11,13]",
            boxColor: "[rgb(232,108,46),null,null,null,null,null,null,null]"
        }], `<div class="d-flex justify-content-center">put the last node was added</div>`
    )
    //second step animated
    balanceBT.nextStep(
        [{
            data: "[4,5,12,10,8,17,11,13]",
            boxColor: "[rgb(232,108,46),null,rgb(232,108,46),null,null,null,null,null,null]",
        }], `<div class="d-flex justify-content-center">balance the tree 12<=>4</div>`
    )//third step animated
    balanceBT.nextStep(
        [{
            data: "[4,5,11,10,8,17,12,13]",
            boxColor: "[null,null,rgb(232,108,46),null,null,null,rgb(232,108,46),null,null]",
        }], `<div class="d-flex justify-content-center">12<=>11</div>`
    )//forth step animated
    balanceBT.nextStep(
        [{
            data: "[4,5,11,10,8,17,12,13]",
            boxColor: "[rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127),rgb(0,255,127)]",
        }], `<div class="d-flex justify-content-center">done</div>`
    )

}

