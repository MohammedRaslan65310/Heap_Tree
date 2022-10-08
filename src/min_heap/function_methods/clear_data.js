function clearData() {
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
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
    arr = [];
    let d = [null];
    let de = d.concat(arr);
    de.push(null);
    let dele = de.join();
    balanceBT.drawData(
        [{
            data: dele,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}