//This methode for animate how the max heap tree work if the root value deleted.
function removeAnimatedM() {
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
            data: "[101,18,37,16,3,27,1,2,8]",
        }], `<div class="d-flex justify-content-center">start</div>`
    )
    //call the next steps function for the animation.
    //this way is the basic one we can improve it later. 
    balancemaxBT.nextStep(
        [{
            data: "[101,18,37,16,3,27,1,2,8]",
            //boxColor: "[rgb(232,108,46),null,null,null,null,null,null,null,null]"
        }], `<div class="d-flex justify-content-center">delete 101</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[8,18,37,16,3,27,1,2]",
            //boxColor: "[rgb(232,108,46),null,null,null,null,null,null,null,rgb(232,108,46)]"
        }], `<div class="d-flex justify-content-center"> remove 101  and swap 8 </div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[37,18,8,16,3,27,1,2]",
            // boxColor: "[rgb(232,108,46),null,rgb(232,108,46),null,null,null,null,null]",
        }], `<div class="d-flex justify-content-center">37>8</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[37,18,27,16,3,8,1,2]",
            //boxColor: "[null,null,rgb(235,21,21),null,null,rgb(235,21,21),null,null,null]"
        }], `<div class="d-flex justify-content-center">27>8</div>`
    )
    balancemaxBT.nextStep(
        [{
            data: "[37,18,27,16,3,8,1,2]",
            //boxColor: "[rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21),rgb(235,21,21)]"
        }], `<div class="d-flex justify-content-center">Max eap tree</div>`
    )
}
