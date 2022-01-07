// class parent{
//     bike(){
//         console.log("passion pro");
//     }

// }

// class child extends parent{
//     bike(){
//         super.bike()
//         console.log("royal enfield");
//     }

// }
// var childbike=new child()
// childbike.bike()

class parent{
    bike(){
        console.log("Passion Pro");
    }
}

class child extends parent{
    bike(){
        console.log("Bullet");
    }


}


var childobj=new child()
childobj.bike()