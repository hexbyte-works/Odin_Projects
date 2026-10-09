function show() {
   console.log(this === global); // true
}

show();