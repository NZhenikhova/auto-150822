

const object1 = {
    method1 (v) {
        console.log ('method1');    
        if (v.cat) {
            const object3 = {
                z: v,
                changes: true
            };
            console.log (object3);
        }
    }
}


const object2 = {
    cat: 'Pixel',
    method2 () {
        object1.method1 (this);

    }
   
}

object2.method2 ();


