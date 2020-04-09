let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr2c = [arr1, arr2, arr3];
let text = "ABCDEFGHIJ0123456789klmnopqrstuvwxyz";

function arr2chieu() {
    for (let i = 0; i < 10; i++) {
        let random1 = text.charAt(Math.floor(Math.random() * text.length));
        let random2 = Math.floor(Math.random() * 20) + 1;
        let random3 = Math.floor(Math.random() * 20) + 1;
        arr1.push(random1);
        arr2.push(random2);
        arr3.push(random3);
    }
    document.getElementById("resultArr2chieu").innerHTML = arr2c + "<br>"
        + "arr1= [ " + arr1 + " ]" + "<br>"
        + "arr2= [ " + arr2 + " ]" + "<br>"
        + "arr3= [ " + arr3 + " ]";
}

function check2() {
    document.getElementById("result").innerHTML = "Mảng Arr= [ " + arr1 + " ]" + "<br>";
    let join = arr1.reverse().join("");
    document.getElementById("resulejoin").innerHTML = "Mảng Arr Sau Khi join & Reverse = " + "\"" + join + "\"";
    console.log(join);
}

function check3() {
    let countNumber = 0;
    let countNaN = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % arr1[i] === 0) {
            countNumber++;
        } else {
            countNaN++
        }
    }
    document.getElementById("resultKyTuSo").innerHTML = "Mảng arr=[ " + arr1 + " ]" + "<br>" + "Có " + countNumber + " Ký Tự Số ";
    document.getElementById("result4").innerHTML = "Mảng arr=[ " + arr1 + " ]" + "<br>" + "Có " + countNaN + " Ký Tự Chữ ";

}

function check05() {
    let a = arr2.splice("");
    let b = arr3.splice("");
    console.log(b);
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            count++
        }
    }
    if (count === a.length) {
        document.getElementById("result5").innerHTML = "Chuỗi a =" + a + "<br>" + "Chuỗi b = " + b + "<br>" + "Hai Chuỗi Bằng Nhau";
    } else {
        document.getElementById("result5").innerHTML = "Chuỗi a =" + a + "<br>" + "Chuỗi b = " + b + "<br>" + "Hai Chuỗi Không Bằng Nhau";

    }
}
