function removeAnimatedM() {

    let balanceBTDiv = document.getElementById("balancemaxBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    let balancemaxBT = treeVisualizer(
        {
            target: "balancemaxBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",

        }

    );



    balancemaxBT.drawData(
        [{
            data: "[101,18,37,16,3,27,1,2,8]",
        }], `<div class="d-flex justify-content-center">start</div>`
    )
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
