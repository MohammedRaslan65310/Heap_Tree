//Init the array.
arr = [];
//this function for init the back ground and draw the data.
function drawTreeMax(zz) {
    //Init the back ground and do some setting on it.
    let balanceBTDiv = document.getElementById("balancemaxBT");
    balanceBTDiv.style.overflow = "scroll";
    balanceBTDiv.style.background = "rgb(255,255,255)"
    //Init the object from the tree visualaizer class.
    let balancemaxBT = treeVisualizer(
        {
            target: "balancemaxBT",
            animation: true,
            boxColor: "rgb(84,161,255)",
            textColor: "rgb(255,255,255)",
            arrowColor: "rgb(255,163,99)",
        }
    );
    //Call the draw function on the object.
    balancemaxBT.drawData(
        [{
            data: zz,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}
//This function for clear all the values in the tree.
function clearM() {
    arr = [];
    let z = [null];
    let zx = z.concat(arr);
    zx.push(null);
    zz = zx.join();
    //document.getElementById('pTextmax').innerHTML = null;
    drawTreeMax(zz);
}
//This function for delete a certain value in the tree and re sorted as a sort max heaptree.
function deleteValueM() {
    let deleteText = document.getElementById('deleteTextmax').value;
    let flag = false;
    deleteNumber = Number(deleteText);
    let xz = arr.map(Number);
    for (let i = 0; i < xz.length; i++)
        if (deleteNumber === xz[i]) {
            xz.splice(i, 1);
            arr.splice(i, 1);
            flag = true;
        }
    sortMax(xz);
    let z = [null];
    let zx = z.concat(xz);
    numberlastlength = zx.length;
    zx[numberlastlength] = null;
    let zz = String(zx);
    drawTreeMax(zz);
    if (flag === false) {
        //change the alert later cuz its so cring to put it.
        alert("not found");
    }
}
//This function for add a new value in the tree and re sorted as a max heap tree.
function pushValueM() {
    let inputText = document.getElementById('inputTextMax').value;
    arr.push(inputText);
    var pval = "";
    for (i = 0; i < arr.length; i++) {
        pval = pval + arr[i] + "        ";
    }
    let xz = arr.map(Number);
    sortMax(xz);
    let z = [null];
    let zx = z.concat(xz);
    numberlastlength = zx.length;
    zx[numberlastlength] = null;
    let zz = String(zx);
    drawTreeMax(zz);
}