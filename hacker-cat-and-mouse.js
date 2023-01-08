function catAndMouse(x, y, z) {
    // console.log(x,y,z)
    let catAMouseCDifference = 0;
    let catBMouseCDifference = 0;
    if (x && y && z) {

        if (x > z) {
            catAMouseCDifference = x - z;
        }
        else {
            catAMouseCDifference = z - x;
        }

        if (y > z) {
            catBMouseCDifference = y - z;
        }
        else {
            catBMouseCDifference = z - y;
        }

        if (catAMouseCDifference > catBMouseCDifference) {
            return "Cat B";
        }
        else if (catBMouseCDifference > catAMouseCDifference) {
            return "Cat A";
        }
        else {
            return "Mouse C";
        }
    }
}
catAndMouse(1);