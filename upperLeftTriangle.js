/* 
Program to print below pattern :
            *
            **
            ***
            ****
*/

function upperLeftTriangle(rows){
    for(let i=1; i<=rows; i++){
        str = '';
        for(let j=1; j<=i; j++){
            str += '*';
        }
        console.log(str);
    }
}

const rows = prompt("Enter Number of Rows :");
upperLeftTriangle(rows);