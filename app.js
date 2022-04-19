
        for (let a = 1; a <= 10; a = a + 2) {
            for (let j = 10; j > a; j--) {
                document.write("&nbsp")

            }
            for (let b = 1; b <= a; b++) {
                document.write("*")
            }

            document.write("<br>")


        }
        document.write("<hr>")

        for (let a = 1; a <= 5; a++) {
            for (let j = 6; j > a; j--) {
                document.write("&nbsp &nbsp")
            }
            for (let b = 1; b <= a; b++) {
                document.write(" *")
            }

            document.write("<br>")

        }

        document.write("<hr>")

        for (let a = 1; a <= 5; a++) {

            for (let b = 1; b <= a; b++) {
                document.write(" *")
            }

            document.write("<br>")

        }

        document.write("<hr>")


        for (let a = 5; a >= 1; a--) {

            for (let b = 1; b <= a; b++) {
                document.write(" *")
            }

            document.write("<br>")

        }
