let arr = [];
function drawData(zz) {
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
    balanceBT.drawData(
        [{
            data: zz,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}
//This function for add a certin value in the tree and call the sort algorithm and the draw data for the tree.
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
//This function for delete a certin value from the tree and re sorted as a min heap tree.
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
        //this alert should replaced with onther box msg cuz it so cring..
        alert("not found");
    }

}