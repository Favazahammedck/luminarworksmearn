class student{
    constructor(...args){
        this.name=args[0]
        this.standard=args[1]
        this.age=args[2]
        this.gender=args[3]

    }
    printStudent(){
        console.log(this.name,this.standard,this.age,this.gender);
    }
}

var student1=new student("favaz",+2,20,"male")
 // no need // student1.setStudent("favaz",+2,20,"male")
student1.printStudent()


var student2=new student("asha",+1,21,"female")
//no need// student2.setStudent("arif",+1,21,"male")
student2.printStudent()