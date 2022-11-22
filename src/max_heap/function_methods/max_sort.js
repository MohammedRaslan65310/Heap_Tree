//this function for process the data and the output is a max heap tree stored as an array.
function sortMax(arr) {
    //swap between two values
    function swap(node, root) {
        let temp = arr[node];
        arr[node] = arr[root];
        arr[root] = temp;
    }
    //detrmine the child and it`s father for the...
    function heapify(arr, i) {
        n = arr.length;
        var l = 2 * i + 1;
        var r = 2 * i + 2;
        var max = i;
        if (l < n && arr[l] > arr[max])
            max = l;
        if (max != i) {
            swap(i, max)
            heapify(arr, max);
        }
    }
    function buildHeap(arr) {
        n = arr.length;
        for (i = n / 2 - 1; i >= 0; i--)
            heapify(arr, i);
    }
    function heapSort(arr) {
        n = arr.length;
        buildHeap(arr);
        for (i = n - 1; i >= 0; i--) {
            swap(0, i);
            heapify(arr, i, 0);
        }
    }
    heapSort(arr);
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}