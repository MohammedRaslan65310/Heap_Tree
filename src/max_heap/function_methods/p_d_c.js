
arr = [];
function drawTreeMax(zz) {
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

            data: zz,
        }], `<div class="d-flex justify-content-center"></div>`
    )
}
function clearM() {
    arr = [];
    let z = [null];
    let zx = z.concat(arr);

    zx.push(null);
    zz = zx.join();


    //document.getElementById('pTextmax').innerHTML = null;
    drawTreeMax(zz);
}
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
        alert("not found");
    }
}
function pDM() {

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

