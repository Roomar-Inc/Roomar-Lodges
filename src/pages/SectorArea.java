import java.util.Scanner;
import java.lang.Math;

public class SectorArea {
    public static void main(String[] args) {
        System.out.println("Welcome! Calculate the area of a circle and sector");
        System.out.println("Please enter any radius of your choice in the input below:");

        // Declare the radius as an integer
        int radius;


        try (// Create a Scanner object to capture and store the radius
        Scanner errandBoy = new Scanner(System.in)) {
            // Initializing the scanner object to the radius variable so it can capture and store integer inputs
            radius = errandBoy.nextInt();
        }

        // Create another variable that stores the value of PI
        double pi = Math.PI;

        // Perform operation for calculating the area of a circle using the formula
        double circleArea = pi * (radius * radius);

        // Display the result of the area of a circle
        System.out.println("Area of a circle: " + circleArea);

        // Initialize an integer value of 65 to the degree variable
        int degree = 65;

        // Convert the degree to radians for the trigonometric calculation to work in Java
        double calculateDegree = degree * (pi / 180);

        // Perform operation to calculate the area of a sector
        double sectorArea = 0.5 * calculateDegree * (radius * radius);

        // Display the result of the area of a sector
        System.out.println("Area of a sector: " + sectorArea);
    }
}
