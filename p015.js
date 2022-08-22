/*
Lattice paths
Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

    * - * - *      * - *   *      * - *   *      *   *   *      *   *   *      *   *   * 
            |          |              |          |              |              | 
    *   *   *      *   * - *      *   *   *      * - * - *      * - *   *      *   *   *
            |              |          |                  |          |          |
    *   *   *      *   *   *      *   * - *      *   *   *      *   * - *      * - * - *

How many such routes are there through a 20×20 grid?
*/

/*

    0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20   

    1   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    2   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    3   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    4   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    5   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    6   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    7   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    8   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    9   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    10  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    11  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    12  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    13  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    14  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    15  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    16  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    17  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    18  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

    19  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   

    20  *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *

*/

// TODO