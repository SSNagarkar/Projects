package com.example.sampleproject2;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

public class ImageConverter {

    public static boolean convertFormat(File imageFile, String outputImagePath, String formatName) throws IOException {
        FileInputStream inputStream = new FileInputStream(imageFile);
        FileOutputStream outputStream = new FileOutputStream(outputImagePath);

        // reads input image from file using ImageIO
        BufferedImage inputImage = ImageIO.read(inputStream);

        // writes to the output image in specified format
        boolean result = ImageIO.write(inputImage, formatName, outputStream);

        // needs to close the streams
        outputStream.close();
        inputStream.close();

        return result;
    }
}
