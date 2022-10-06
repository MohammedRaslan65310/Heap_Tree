let arr = [];
function drawData(zz) {
    let balanceBTDiv = document.getElementById("balanceBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(171,216,167)"
    let balanceBT = treeVisualizer(
        {
            target: "balanceBT",
            animation: true
        }
    );

    //draw the tree
    balanceBT.drawData(
        [{
            data: zz,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}
function pushData() {
    let inputText = document.getElementById('inputText').value;

    arr.push(inputText);
    var pval = "";

    for (i = 0; i < arr.length; i++) {
        pval = pval + arr[i] + "        ";
    }
    let xz = arr.map(Number);
    let z = [null];
    let zx = z.concat(xz);
    console.log(zx + "aaaa");
    sort(zx);

    console.log(zx + "xxx");
    numberlastlength = zx.length;
    zx[numberlastlength] = null;
    let zz = String(zx);
    console.log(zz);


    drawData(zz);

    //document.getElementById('pText').innerHTML = pval;
}
function deleteValue() {
    let deleteText = document.getElementById('deleteText').value;
    let flag = false;
    deleteNumber = Number(deleteText);
    let xz = arr.map(Number);
    for (let i = 0; i < xz.length; i++)
        if (deleteNumber === xz[i]) {
            xz.splice(i, 1);
            arr.splice(i, 1);
            flag = true;
        }
    let z = [null];
    let zx = z.concat(xz);
    sort(zx);
    numberlastlength = zx.length;
    zx[numberlastlength] = null;
    let zz = String(zx);

    drawData(zz);
    if (flag === false) {
        alert("not found");
    }

}