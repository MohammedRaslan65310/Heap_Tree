function clearData() {
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(171,216,167)"
    let balanceBT = treeVisualizer(
        {target:"balanceBT",
        animation:true}
    );
    //draw the tree
    arr = [];
    let d = [null];
    let de = d.concat(arr);
    de.push(null);
    let dele = de.join();
    balanceBT.drawData(
        [{
            data:dele,
        }],`<div class="d-flex justify-content-center">start</div>`
    )
}