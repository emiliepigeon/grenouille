// déclaration de classes pour éviter d'écrire trop de ligne de code
// vitesse direction largeur élément et type d'élément voiture ou buche
// pas obligatoire mais lisibilité
function Line(speed, dir, width, type) {
    //  arguments
    this.speed = speed;
    this.dir = dir;
    this.width = width;
    this.type = type;
}

// positio platefomes axe x et y
function Obj(x, y, line) {
    this.x = x;
    this.y = y;
    this.line = line;

    this.inCollision = function (frog) {
        // espacement deplacement en pixel = condition
        if (frog.x + 25 >= this.x && frog.x + 5 <= (this.x + this.line.width)) {
            return true;
        } else {
            return false;
        }
    }
    //  1 et -1 dans game
    this.move = function () {
        if (this.line.dir == 1) {
            // taille écran
            if (this.x > 650) {
                this.x = (this.line.width * 3);
            } else {
                this.x = this.x + (this.line.speed * this.line.dir);
            }
        } else {
            if (this.x < - this.line.width) {
                this.x = 650 + (this.line.width * 3);
                // width html
            } else {
                this.x = this.x + (this.line.speed * this.line.dir);
            }
        }
    }
}

function Frog() {
    this.x = 310;
    this.y = 380;
    this.state = false;
    this.deg = 0;
    this.block = function () {
        this.state = false;
    }

    this.unBlock = function () {
        this.state = true;
    }

    this.isNotBlocked = function () {
        return this.state;
    }

    this.goUp = function () {
        if (this.state == true) {
            if (this.y > 20) {
                this.y = this.y - 30;
            }
            this.deg = 0;
        }
    }
    this.goDown = function () {
        if (this.state = true) {
            if (this.y = 170) {
                if (this.x > 310) {
                    while (((this.x - 10) % 30) != 0) {
                        this.x--;
                    }
                } else {
                    while (((this.x - 10) % 30) != 0) {
                        this.x++;
                    }
                }
            }
            if (this.y < 380) {
                this.y = this.y + 30;
            }
            this.deg = 180;
        }
    }
}